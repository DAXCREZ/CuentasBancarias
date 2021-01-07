import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";

import { repositorioGenerico } from "../base/repositorioGenerico";
import { savingaccountIORM } from "../Database/orm/savingaccountIORM";

@Injectable()
@EntityRepository(savingaccountIORM)
export class savingAccountRepositorio extends repositorioGenerico<savingaccountIORM>{}