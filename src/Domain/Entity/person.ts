import { ObjectID } from "typeorm";

export abstract class Person{

  public _id: ObjectID;
  public name: string;
  public id: string;
  public telephone_Number: string;
  public address: string;

}