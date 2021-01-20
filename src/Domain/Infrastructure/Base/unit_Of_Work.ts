import { Iunit_Of_Work } from "../Contracts/Iunit_Of_Work";
import { Connection, EntityManager, QueryRunner } from "typeorm";
import { Client_Repository } from "../Repositories/client_Repository";
import { Veterinarian_Repository } from "../Repositories/veterinarian_Repository";
import { Pet_Repository } from "../Repositories/pet_Repository";
import { Product_Repository } from "../Repositories/product_Repository";
import { Inject } from "@nestjs/common";

export class Unit_Of_Work implements Iunit_Of_Work {

  private readonly query_Runner: QueryRunner;
  private entity_Manager: EntityManager;

  client_Repository: Client_Repository;
  veterinarian_Repository: Veterinarian_Repository;
  pet_Repository: Pet_Repository;
  product_Repository: Product_Repository;

  constructor(@Inject('DATABASE_CONNECTION') private readonly async_Database_Connection: Connection) {

    this.query_Runner = this.async_Database_Connection.createQueryRunner();

    this.client_Repository = this.async_Database_Connection.getCustomRepository(Client_Repository);
    this.veterinarian_Repository = this.async_Database_Connection.getCustomRepository(Veterinarian_Repository);
    this.pet_Repository = this.async_Database_Connection.getCustomRepository(Pet_Repository);
    this.product_Repository = this.async_Database_Connection.getCustomRepository(Product_Repository);

  }

  async start() {

    await this.query_Runner.startTransaction();
    this.setEntityManager();

  }

  private setEntityManager(){

    this.entity_Manager = this.query_Runner.manager;

  }

  async complete(work: () => any): Promise<any> {
    try{

      const response = await work();
      await this.query_Runner.commitTransaction();
      return response;

    } catch (e) {

      await this.query_Runner.rollbackTransaction();
      return e.toString();

    } finally {

      await this.query_Runner.release();

    }
  }

  getConnection(): Connection {
    return this.async_Database_Connection;
  }

  async closeConnection() {

    await this.async_Database_Connection.close();
    await this.query_Runner.manager.connection.close();

  }

}