import { currentAccountRepositorio } from "../Repositirio/CurrentAccountRepositorio";
import { savingAccountRepositorio } from "../Repositirio/SavingAccountRepositorio";
import { Connection } from "typeorm";

export interface Iunidadtrabajo{
  currentAccountRepositorio: currentAccountRepositorio;
  savingAccountRepositorio: savingAccountRepositorio;

  star(): void;
  complete(work: ()=> any): Promise<any>;
  getConnection(): Connection;
  closeConnection();
  
}