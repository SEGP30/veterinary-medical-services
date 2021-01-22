import { Unit_Of_Work } from "../../Domain/Infrastructure/Base/unit_Of_Work";
import { Person } from "../../Domain/Entity/person";
import { Client_Repository } from "../../Domain/Infrastructure/Repositories/client_Repository";
import { Client } from "../../Domain/Entity/client";

export class Register_Client_Service{

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  async execute(request: Register_Client_Request): Promise<Register_Client_Response> {

    try{

      const client_Searched: Person = await this.unit_Of_Work.client_Repository.find_Entity(request.id);

      if(client_Searched == undefined){

        const new_Client: Person = new Client();

        new_Client.id = request.id;
        new_Client.name = request.name;
        new_Client.telephone_Number = request.telephone_Number;
        new_Client.address = request.address;

        await this.unit_Of_Work.start();
        const saved_Client = await this.unit_Of_Work.client_Repository.save(Client_Repository.map_Entity_To_Orm(new_Client));

        if(saved_Client != undefined){

          return new Register_Client_Response('Un nuevo cliente ha sido registrado satisfactoriamente');

        }

      }

      return new Register_Client_Response('Este cliente ya se encuentra registrado');

    } catch(e){

      return new Register_Client_Response('Se ha presentado un error al momento de registrar este cliente');

    }

  }

}

export class Register_Client_Request{

  constructor(

    public readonly id: string,
    public readonly name: string,
    public readonly telephone_Number: string,
    public readonly address: string

  ) {}

}

export class Register_Client_Response{
  constructor(public readonly message: string) {}
}