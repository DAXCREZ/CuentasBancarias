import { Connection, EntityManager, QueryRunner } from "typeorm";
import { currentAccountRepositorio } from "../Repositirio/currentAccountRepositorio";
import { savingAccountRepositorio } from "../Repositirio/savingAccountRepositorio";
import { Iunidadtrabajo } from "../Contracts/Iunidadtrabajo";
import { Inject } from "@nestjs/common";
import { tryCatch } from "rxjs/internal-compatibility";

export class IunidadTrabajo implements Iunidadtrabajo{

  private readonly queryRunner: QueryRunner;
  private transactionManager: EntityManager;

  public currentAccountRepositorio: currentAccountRepositorio;
  public savingAccountRepositorio: savingAccountRepositorio;

  constructor(@Inject('DATABASE_CONNECTION') private readonly asyncDatabaseConnection: Connection ) {
    this.queryRunner = this.asyncDatabaseConnection.createQueryRunner();

    this.currentAccountRepositorio = this.asyncDatabaseConnection.getCustomRepository(currentAccountRepositorio);
    this.savingAccountRepositorio = this.asyncDatabaseConnection.getCustomRepository(savingAccountRepositorio);
  }

  async star(){
    await this.queryRunner.startTransaction();
    this.setTransactionManager();
  }

  private setTransactionManager() {
    this.transactionManager = this.queryRunner.manager;
  }

  async complete(work: () => any): Promise<any> {
    try{
      const response = await work();
      await this.queryRunner.commitTransaction();
    }catch (e){
      await this.queryRunner.rollbackTransaction();
      return toString();
    }finally {
      await this.queryRunner.release();
    }
  }

  getConnection(): Connection {
    return this.asyncDatabaseConnection;
  }

  async closeConnection() {
    await this.asyncDatabaseConnection.close();
    await this.queryRunner.manager.connection.close();
  }


}