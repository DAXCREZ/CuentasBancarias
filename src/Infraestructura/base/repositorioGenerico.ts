import { Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";

@Injectable()
export class repositorioGenerico<T> extends MongoRepository<T>{}