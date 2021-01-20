import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { Client_Orm } from "../Database/Orm/client_Orm";
import { Generic_Repository } from "../Base/generic_Repository";
import { Person } from "../../Entity/person";
import { Client } from "../../Entity/client";

@Injectable()
@EntityRepository(Client_Orm)
export class Client_Repository extends Generic_Repository<Client_Orm> {

  public map_Orm_To_Entity(orm: Client_Orm): Person {

    const client: Person = new Client();

    client._id = orm._id;
    client.id = orm.id;
    client.name = orm.name;
    client.telephone_Number = orm.telephone_Number;
    client.address = orm.address;

    return client;

  }

  public static map_Entity_To_Orm(entity: Person): Client_Orm {

    const orm: Client_Orm = new Client_Orm();
    orm._id = entity._id;
    orm.id = entity.id;
    orm.name = entity.name;
    orm.telephone_Number = entity.telephone_Number;
    orm.address = entity.address;

    return orm;

  }

}
