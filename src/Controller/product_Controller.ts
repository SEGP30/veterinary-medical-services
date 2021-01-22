import { Body, Controller, Post } from "@nestjs/common";
import { Unit_Of_Work } from "../Domain/Infrastructure/Base/unit_Of_Work";
import { Register_Product_Request, Register_Product_Service } from "../Application/product/register_Product_Service";

@Controller('product')
export class Product_Controller {

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  @Post()
  async register_Product(@Body() request: Register_Product_Request) {

    const service: Register_Product_Service = new Register_Product_Service(this.unit_Of_Work);

    return await service.execute(request);

  }

}