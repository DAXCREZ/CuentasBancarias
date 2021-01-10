import { Module } from "@nestjs/common";
import { RegistrarCuentaAhorroServicio } from "./cuentaahorro/RegistrarCuentaAhorroServicio";
import { RegistrarCuentaCorrienteServicios } from "./cuentacorriente/RegistrarCuentaCorrienteServicios";
import { ConsignacionCuentaAhorrosServicios } from "./cuentaahorro/ConsignacionCuentaAhorrosServicios";
import { RetirarCuentaAhorrosServicio } from "./cuentaahorro/RetirarCuentaAhorroServicio";
import {ConsignacionCuentaCorrienteServicio} from "./cuentacorriente/ConsignacionCuentaCorrienteServicio";
import { RetirarCuentaCorrienteServicio } from "./cuentacorriente/RetirarCuentaCorrienteServicio";

@Module({
  imports: [
    RegistrarCuentaCorrienteServicios,
    RegistrarCuentaAhorroServicio,
    ConsignacionCuentaAhorrosServicios,
    RetirarCuentaAhorrosServicio,
    ConsignacionCuentaCorrienteServicio,
    RetirarCuentaCorrienteServicio
  ],

  exports: [
    RegistrarCuentaAhorroServicio,
    RegistrarCuentaCorrienteServicios,
    ConsignacionCuentaAhorrosServicios,
    RetirarCuentaAhorrosServicio,
    ConsignacionCuentaCorrienteServicio,
    RetirarCuentaCorrienteServicio
  ]
})

export class ModuloAplicacion{}


