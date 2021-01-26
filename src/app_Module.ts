import { Module } from '@nestjs/common';
import { Application_Module } from "./Application/application_Module";
import { Controller_Module } from "./Controller/controller_Module";
import { Infrastructure_Module } from "./Infrastructure/infrastructure_module";

@Module({
  imports: [
    Application_Module,
    Controller_Module,
    Infrastructure_Module
  ],

})
export class App_Module {}
