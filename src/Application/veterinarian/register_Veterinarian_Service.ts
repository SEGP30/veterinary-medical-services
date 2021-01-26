import { Unit_Of_Work } from "../../Infrastructure/Base/unit_Of_Work";
import { Veterinarian_Repository } from "../../Infrastructure/Repositories/veterinarian_Repository";
import { Person } from "../../Domain/Entity/person";
import { Veterinarian } from "../../Domain/Entity/veterinarian";

export class Register_Veterinarian_Service{

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  async execute(request: Register_Veterinarian_Request): Promise<Register_Veterinarian_Response> {

    try{

      const veterinarian_Searched: Person = await this.unit_Of_Work.veterinarian_Repository.find_Entity(request.id);

      if(veterinarian_Searched == undefined){

        const new_Veterinarian: Veterinarian = new Veterinarian();

        new_Veterinarian.id = request.id;
        new_Veterinarian.name = request.name;
        new_Veterinarian.telephone_Number = request.telephone_Number;
        new_Veterinarian.address = request.address;
        new_Veterinarian.speciality = request.speciality;
        new_Veterinarian.turn = request.turn;

        await this.unit_Of_Work.start();
        const saved_Client = await this.unit_Of_Work.veterinarian_Repository.save(Veterinarian_Repository.map_Entity_To_Orm(new_Veterinarian));

        if(saved_Client != undefined){

          return new Register_Veterinarian_Response('Un nuevo veterinario ha sido registrado satisfactoriamente');

        }

      }

      return new Register_Veterinarian_Response('Este veterinario ya se encuentra registrado');

    } catch(e){

      return new Register_Veterinarian_Response('Se ha presentado un error al momento de registrar este veterinario');

    }

  }

}

export class Register_Veterinarian_Request {

  constructor(

    public readonly id: string,
    public readonly name: string,
    public readonly telephone_Number: string,
    public readonly address: string,
    public readonly speciality: string,
    public readonly turn: string

  ) {}

}

export class Register_Veterinarian_Response {
  constructor(public readonly message: string) {}
}