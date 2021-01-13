import { Module } from "@nestjs/common";
import { moduloBasedatos } from "./Database/ModuloBasedatos";
import { UnidadTrabajo } from "./base/UnidadTrabajo";

@Module({
  imports:[moduloBasedatos],
  providers:[UnidadTrabajo],
  exports:[UnidadTrabajo]
})

export class InfraestructuraModulo {}
