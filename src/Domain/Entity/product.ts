import { ObjectID } from "typeorm";

export class Product{

  public _id: ObjectID;
  public code: string;
  public type: string;
  public brand: string;
  public price: number;

}