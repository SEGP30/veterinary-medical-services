import { ObjectID } from "typeorm";

export class Pet{

  public _id: ObjectID;
  public owner_Id: string;
  public kind: string;
  public race: string;
  public weigth: string;
  public age: string;
  public gender: string;

}