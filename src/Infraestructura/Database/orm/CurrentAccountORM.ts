
// @ts-ignore
import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";
import {FinancialMovement} from "../../../Dominio/entity/FinancialMovement";

@Entity('Current Account')
export class currentAccountORM {
  @ObjectIdColumn()
  _id: ObjectID;
  @Column()
  public number:string;
  @Column()
  public balance:number;
  @Column()
  public ownerID:string;
  @Column()
  public city:string;
  @Column()
  public movement:FinancialMovement[];


}