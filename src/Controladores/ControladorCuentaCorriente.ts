import {Body, Controller, Post} from "@nestjs/common";
import {UnidadTrabajo} from "../Infraestructura/base/UnidadTrabajo";
import { RegistrarCuentaCorrienteServicios,
  RegistrarCuentaCorrienteRequest} from "../Aplicacion/cuentacorriente/RegistrarCuentaCorrienteServicios";
import {
  ConsignacionCuentaCorrienteRequets,
  ConsignacionCuentaCorrienteServicios
} from "../Aplicacion/cuentacorriente/ConsignacionCuentaCorrienteServicio";
import { RetirarCuentaCorrienteRequest, RetirarCuentaCorrienteServicio } from "src/Aplicacion/cuentacorriente/RetirarCuentaCorrienteServicio";

@Controller('Cuenta Corriente')
export class ControladorCuentaCorriente{
  constructor(private readonly IunidadTrabajo: UnidadTrabajo) {}

  @Post()
  async registraCuentaCorriente(@Body() request: RegistrarCuentaCorrienteRequest){
    const service: RegistrarCuentaCorrienteServicios = new RegistrarCuentaCorrienteServicios(this.IunidadTrabajo);
    return await service.execute(request);
  }

  @Post()
  async consignarCuentaCorriente(@Body() request: ConsignacionCuentaCorrienteRequets){
    const service: ConsignacionCuentaCorrienteServicios = new ConsignacionCuentaCorrienteServicios(this.IunidadTrabajo);
    return await service.execute(request);
  }

  @Post()
  async retirarCuentaAhorro(@Body() request: RetirarCuentaCorrienteRequest){
    const service: RetirarCuentaCorrienteServicio = new RetirarCuentaCorrienteServicio(this.IunidadTrabajo);
    return await service.execute(request);
  }

}
