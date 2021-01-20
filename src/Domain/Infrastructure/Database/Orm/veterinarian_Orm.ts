import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('VETERINARIANS')
export class Veterinarian_Orm {

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
  @Column()
  public speciality: string;
  @Column()
  public turn: string;

}