import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { Generic_Repository } from "../Base/generic_Repository";
import { Pet_Orm } from "../Database/Orm/pet_Orm";
import { Pet } from "../../Domain/Entity/pet";

@Injectable()
@EntityRepository(Pet_Orm)
export class Pet_Repository extends Generic_Repository<Pet_Orm> {

  public map_Orm_To_Entity(orm: Pet_Orm): Pet {

    const pet: Pet = new Pet();

    pet._id = orm._id;
    pet.owner_Id = orm.owner_Id;
    pet.kind = orm.kind;
    pet.race = orm.race;
    pet.weigth = orm.weigth;
    pet.age = orm.age;
    pet.gender = orm.gender;


    return pet;

  }

  public static map_Entity_To_Orm(entity: Pet): Pet_Orm {

    const orm: Pet_Orm = new Pet_Orm();
    orm._id = entity._id;
    orm.owner_Id = entity.owner_Id;
    orm.kind = entity.kind;
    orm.race = entity.race;
    orm.weigth = entity.weigth;
    orm.age = entity.age;
    orm.gender = entity.gender;

    return orm;

  }

}