import { Module } from "@nestjs/common";
import { moduloBasedatos } from "./Database/moduloBasedatos";
import { UnidadTrabajo } from "./base/UnidadTrabajo";

@Module({
  imports:[moduloBasedatos],
  providers:[UnidadTrabajo],
  exports:[UnidadTrabajo]
})

export class Infraestructuramodulo {}
