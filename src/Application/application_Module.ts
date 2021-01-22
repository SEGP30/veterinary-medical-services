import { Module } from "@nestjs/common";
import { Register_Client_Service } from "./client/register_Client_Service";
import { Register_Pet_Service } from "./pet/register_Pet_Service";
import { Register_Veterinarian_Service } from "./veterinarian/register_Veterinarian_Service";
import { Register_Product_Service } from "./product/register_Product_Service";

@Module({

  imports: [
    Register_Client_Service,
    Register_Pet_Service,
    Register_Veterinarian_Service,
    Register_Product_Service
  ],
  exports: [
    Register_Client_Service,
    Register_Pet_Service,
    Register_Veterinarian_Service,
    Register_Product_Service
  ]

})

export class Application_Module{}