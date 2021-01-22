import { Body, Controller, Post } from "@nestjs/common";
import { Unit_Of_Work } from "../Domain/Infrastructure/Base/unit_Of_Work";
import { Register_Pet_Request, Register_Pet_Service } from "../Application/pet/register_Pet_Service";

@Controller('pet')
export class Pet_Controller {

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  @Post()
  async register_Client(@Body() request: Register_Pet_Request) {

    const service: Register_Pet_Service = new Register_Pet_Service(this.unit_Of_Work);

    return await service.execute(request);

  }

}