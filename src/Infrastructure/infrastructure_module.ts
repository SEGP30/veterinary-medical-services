import { Module } from "@nestjs/common";
import { Database_Module } from "./Database/database_Module";
import { Unit_Of_Work } from "./Base/unit_Of_Work";

@Module({

  imports: [Database_Module],
  providers: [Unit_Of_Work],
  exports: [Unit_Of_Work]

})

export class Infrastructure_Module {}