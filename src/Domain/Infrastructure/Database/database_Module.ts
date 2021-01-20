import { Module } from "@nestjs/common";
import { database_Providers } from "./Provider/database_Provider";
import { client_Provider, pet_Provider, product_Provider, veterinarian_Provider } from "./Migrations/entity_Provider";

@Module({


  providers: [

    ...database_Providers,
    ...client_Provider,
    ...veterinarian_Provider,
    ...pet_Provider,
    ...product_Provider

  ],
  exports: [

    ...database_Providers,
    ...client_Provider,
    ...veterinarian_Provider,
    ...pet_Provider,
    ...product_Provider

  ]


})
export class Database_Module {}