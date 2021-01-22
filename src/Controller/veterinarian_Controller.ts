import { Body, Controller, Post } from "@nestjs/common";
import { Unit_Of_Work } from "../Domain/Infrastructure/Base/unit_Of_Work";
import {
  Register_Veterinarian_Request,
  Register_Veterinarian_Service
} from "../Application/veterinarian/register_Veterinarian_Service";

@Controller('veterinarian')
export class Veterinarian_Controller {

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  @Post()
  async register_Veterinarian(@Body() request: Register_Veterinarian_Request) {

    const service: Register_Veterinarian_Service = new Register_Veterinarian_Service(this.unit_Of_Work);

    return await service.execute(request);

  }

}