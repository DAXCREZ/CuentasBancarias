
import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";
import {FinancialMovement} from "../../../domain/entity/financial.movement";

@Entity('Current Account')

export class currentaccountORM{
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