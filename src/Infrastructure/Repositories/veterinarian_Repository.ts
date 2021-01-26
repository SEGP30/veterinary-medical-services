import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { Generic_Repository } from "../Base/generic_Repository";
import { Veterinarian_Orm } from "../Database/Orm/veterinarian_Orm";
import { Person } from "../../Domain/Entity/person";
import { Veterinarian } from "../../Domain/Entity/veterinarian";


@Injectable()
@EntityRepository(Veterinarian_Orm)
export class Veterinarian_Repository extends Generic_Repository<Veterinarian_Orm> {

  public map_Orm_To_Entity(orm: Veterinarian_Orm): Person {

    const veterinarian: Veterinarian = new Veterinarian();

    veterinarian._id = orm._id;
    veterinarian.id = orm.id;
    veterinarian.name = orm.name;
    veterinarian.telephone_Number = orm.telephone_Number;
    veterinarian.address = orm.address;
    veterinarian.speciality = orm.speciality;
    veterinarian.turn = orm.turn;


    return veterinarian;

  }

  public static map_Entity_To_Orm(entity: Veterinarian): Veterinarian_Orm {

    const orm: Veterinarian_Orm = new Veterinarian_Orm();
    orm._id = entity._id;
    orm.id = entity.id;
    orm.name = entity.name;
    orm.telephone_Number = entity.telephone_Number;
    orm.address = entity.address;
    orm.speciality = entity.speciality;
    orm.turn = entity.turn;

    return orm;

  }

}