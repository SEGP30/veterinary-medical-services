import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('CLIENTS')
export class Client_Orm {

  @ObjectIdColumn()
  _id: ObjectID;
  @Column()
  public id: string;
  @Column()
  public name: string;
  @Column()
  public telephone_Number: string;
  @Column()
  public address: string;

}