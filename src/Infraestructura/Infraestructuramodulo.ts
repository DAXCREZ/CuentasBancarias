import { Module } from "@nestjs/common";
import { moduloBasedatos } from "./Database/moduloBasedatos";
import { IunidadTrabajo } from "./base/IunidadTrabajo";

@Module({
  imports:[moduloBasedatos],
  providers:[IunidadTrabajo],
  exports:[IunidadTrabajo]
})

export class Infraestructuramodulo {}
