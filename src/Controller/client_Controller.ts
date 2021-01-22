import { Body, Controller, Post } from "@nestjs/common";
import { Unit_Of_Work } from "../Domain/Infrastructure/Base/unit_Of_Work";
import { Register_Client_Request, Register_Client_Service } from "../Application/client/register_Client_Service";

@Controller('client')
export class Client_Controller {

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  @Post()
  async register_Client(@Body() request: Register_Client_Request) {

    const service: Register_Client_Service = new Register_Client_Service(this.unit_Of_Work);

    return await service.execute(request);

  }

}