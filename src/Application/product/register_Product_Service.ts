import { Unit_Of_Work } from "../../Infrastructure/Base/unit_Of_Work";
import { Product } from "../../Domain/Entity/product";
import { Product_Repository } from "../../Infrastructure/Repositories/product_Repository";


export class Register_Product_Service{

  constructor(private readonly unit_Of_work: Unit_Of_Work) {}

  async execute(request: Register_Product_Request): Promise<Register_Product_Response> {

    try{

      const pet_Searched: Product = await this.unit_Of_work.product_Repository.find_Entity(request.code);

      if(pet_Searched == undefined) {

        const new_Product: Product = new Product();

        new_Product.code = request.code;
        new_Product.brand = request.brand;
        new_Product.type = request.type;
        new_Product.price = request.price;

        await this.unit_Of_work.start();
        const saved_Product = await this.unit_Of_work.product_Repository.save(Product_Repository.map_Entity_To_Orm(new_Product));

        if(saved_Product != undefined){

          return new Register_Product_Response('El producto ha sido registrado satisfactoriamente')

        }

      }

      return new Register_Product_Response('Este producto ya se encuentra registrado')

    } catch (e) {

      return new Register_Product_Response('Ha ocurrido un error al momento de registrar este producto')

    }

  }

}

export class Register_Product_Request {

  public readonly code: string;
  public readonly type: string;
  public readonly brand: string;
  public readonly price: number;

}

export class Register_Product_Response {
  constructor(public readonly message: string) {}
}