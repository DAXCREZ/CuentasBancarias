import { currentAccountRepositorio } from "../Repositirio/currentAccountRepositorio";
import { savingAccountRepositorio } from "../Repositirio/savingAccountRepositorio";
import { Connection } from "typeorm";

export interface Iunidadtrabajo{
  currentAccountRepositorio: currentAccountRepositorio;
  savingAccountRepositorio: savingAccountRepositorio;

  star(): void;
  complete(work: ()=> any): Promise<any>;
  getConnection(): Connection;
  closeConnection();
  
}