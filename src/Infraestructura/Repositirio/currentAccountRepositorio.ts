import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { currentaccountORM } from "../Database/orm/currentaccountORM";
import { repositorioGenerico } from "../base/repositorioGenerico";

@Injectable()
@EntityRepository(currentaccountORM)
export class currentAccountRepositorio extends repositorioGenerico<currentaccountORM>{}
