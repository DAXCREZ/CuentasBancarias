import { Module } from "@nestjs/common";
import { RegistrarCuentaAhorroServicio } from "./cuentaahorro/RegistrarCuentaAhorroServicio";
import { RegistrarCuentaCorrienteServicios } from "./cuentacorriente/RegistrarCuentaCorrienteServicios";


@Module({
  imports: [
    RegistrarCuentaCorrienteServicios,
    RegistrarCuentaAhorroServicio
  ],

  exports: [
    RegistrarCuentaAhorroServicio,
    RegistrarCuentaCorrienteServicios
  ]
})

export class ModuloAplicacion{}


