import { Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";
import { BankAccount } from "../../Dominio/entity/BankAccount";

@Injectable()
export abstract class repositorioGenerico<T> extends MongoRepository<T>{
  public abstract mapOrmToEntity(orm: T): BankAccount;

  public async EncontrarEntidad(number: string): Promise<BankAccount>{
    const orm = await  this.findOne({where: {number: number}})
    return orm == undefined ? undefined : this.mapOrmToEntity(orm);
  }

  public async EncontrarTodasEntidades(): Promise<BankAccount[]>{
    const accounts: BankAccount[] = [];
    const buscandoUsuarios = await this.find();
    buscandoUsuarios.forEach(orm => accounts.push(this.mapOrmToEntity(orm)));
    return accounts;
  }
}