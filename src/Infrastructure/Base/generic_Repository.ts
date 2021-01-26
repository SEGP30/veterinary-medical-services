import { Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";

@Injectable()
export abstract class Generic_Repository<T>extends MongoRepository<T>{

  public abstract map_Orm_To_Entity(orm: T): any;

  public async find_Entity(number: string): Promise<any>{

    const orm = await this.findOne({where: {number: number}});
    return orm == undefined ? undefined : this.map_Orm_To_Entity(orm);

  }

  public async find_All_Entities(): Promise<any[]>{

    const entity_List = [];
    const searched_Entities = await this.find();

    searched_Entities.forEach(orm => entity_List.push(this.map_Orm_To_Entity(orm)));

    return entity_List;

  }


}

