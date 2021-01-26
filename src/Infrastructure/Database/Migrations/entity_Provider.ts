import { Connection } from "typeorm";
import { Client_Orm } from "../Orm/client_Orm";
import { Veterinarian_Orm } from "../Orm/veterinarian_Orm";
import { Pet_Orm } from "../Orm/pet_Orm";
import { Product_Orm } from "../Orm/product_Orm";

export const client_Provider = [

  {

    provide:'CLIENT_REPOSITORY',
    useFactory:(connection: Connection) =>connection.getRepository(Client_Orm),
    inject: ['DATABASE_CONNECTION'],

  }

];

export const veterinarian_Provider = [

  {

    provide:'VETERINARIAN_REPOSITORY',
    useFactory:(connection: Connection) =>connection.getRepository(Veterinarian_Orm),
    inject: ['DATABASE_CONNECTION'],

  }

];

export const pet_Provider = [

  {

    provide:'PET_REPOSITORY',
    useFactory:(connection: Connection) =>connection.getRepository(Pet_Orm),
    inject: ['DATABASE_CONNECTION'],

  }

];

export const product_Provider = [

  {

    provide:'PRODUCT_REPOSITORY',
    useFactory:(connection: Connection) =>connection.getRepository(Product_Orm),
    inject: ['DATABASE_CONNECTION'],

  }

];
