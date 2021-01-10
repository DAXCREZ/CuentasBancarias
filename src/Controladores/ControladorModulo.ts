import { Module } from "@nestjs/common";
import { ModuloAplicacion } from "../Aplicacion/ModuloAplicacion";
import { ControladorCuentaAhorro } from "./ControladorCuentaAhorro";
import { ControladorCuentaCorriente } from "./ControladorCuentaCorriente";
import { Infraestructuramodulo } from "src/Infraestructura/Infraestructuramodulo";

@Module({
  imports: [
    Infraestructuramodulo,
    ModuloAplicacion
  ],

  controllers: [
    ControladorCuentaAhorro,
    ControladorCuentaCorriente
  ]
})

export class ControladorModulo{}