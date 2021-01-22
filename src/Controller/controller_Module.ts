import { Module } from "@nestjs/common";
import { Infrastructure_Module } from "../Domain/Infrastructure/infrastructure_module";
import { Application_Module } from "../Application/application_Module";
import { Client_Controller } from "./client_Controller";
import { Veterinarian_Controller } from "./veterinarian_Controller";
import { Pet_Controller } from "./pet_Controller";
import { Product_Controller } from "./product_Controller";

@Module({

  imports: [
    Infrastructure_Module,
    Application_Module
  ],
  controllers: [
    Client_Controller,
    Veterinarian_Controller,
    Pet_Controller,
    Product_Controller
  ]

})

export class Controller_Module {}