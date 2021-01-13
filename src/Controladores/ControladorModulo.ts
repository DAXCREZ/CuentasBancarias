import { Module } from "@nestjs/common";
import { ModuloAplicacion } from "../Aplicacion/ModuloAplicacion";
import { ControladorCuentaAhorro } from "./ControladorCuentaAhorro";
import { ControladorCuentaCorriente } from "./ControladorCuentaCorriente";
import { InfraestructuraModulo } from "src/Infraestructura/InfraestructuraModulo";

@Module({
  imports: [
    InfraestructuraModulo,
    ModuloAplicacion
  ],

  controllers: [
    ControladorCuentaAhorro,
    ControladorCuentaCorriente
  ]
})

export class ControladorModulo{}