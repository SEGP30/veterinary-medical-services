import { Client_Repository } from "../Repositories/client_Repository";
import { Veterinarian_Repository } from "../Repositories/veterinarian_Repository";
import { Pet_Repository } from "../Repositories/pet_Repository";
import { Product_Repository } from "../Repositories/product_Repository";
import { Connection } from "typeorm";

export interface Iunit_Of_Work {

  client_Repository: Client_Repository;
  veterinarian_Repository: Veterinarian_Repository;
  pet_Repository: Pet_Repository;
  product_Repository: Product_Repository;

  start(): void;
  complete(work: () => any): Promise<any>;
  getConnection(): Connection;
  closeConnection();

}