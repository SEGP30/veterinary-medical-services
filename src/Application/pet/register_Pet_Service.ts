import { Unit_Of_Work } from "../../Infrastructure/Base/unit_Of_Work";
import { Pet } from "../../Domain/Entity/pet";
import { Pet_Repository } from "../../Infrastructure/Repositories/pet_Repository";

export class Register_Pet_Service{

  constructor(private readonly unit_Of_work: Unit_Of_Work) {}

  async execute(request: Register_Pet_Request): Promise<Register_Pet_Response> {

    try{

      const pet_Searched: Pet = await this.unit_Of_work.pet_Repository.find_Entity(request.owner_Id);

      if(pet_Searched == undefined) {

        const new_Pet: Pet = new Pet();

        new_Pet.owner_Id = request.owner_Id;
        new_Pet.kind = request.kind;
        new_Pet.race = request.race;
        new_Pet.weigth = request.weigth;
        new_Pet.gender = request.gender;
        new_Pet.age = request.age;

        await this.unit_Of_work.start();
        const saved_Pet = await this.unit_Of_work.pet_Repository.save(Pet_Repository.map_Entity_To_Orm(new_Pet));

        if(saved_Pet != undefined){

          return new Register_Pet_Response('La mascota ha sido registrada satisfactoriamente')

        }

      }

      return new Register_Pet_Response('Esta mascota ya se encuentra registrada')

    } catch (e) {

      return new Register_Pet_Response('Ha ocurrido un error al momento de registrar esta mascota')

    }

  }

}

export class Register_Pet_Request{

  public readonly owner_Id: string;
  public readonly kind: string;
  public readonly race: string;
  public readonly weigth: string;
  public readonly age: string;
  public readonly gender: string;

}

export class Register_Pet_Response{
  constructor(public readonly message: string) {}
}