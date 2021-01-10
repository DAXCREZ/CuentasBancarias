import {Body, Controller, Post} from "@nestjs/common";
import {UnidadTrabajo} from "../Infraestructura/base/UnidadTrabajo";
import {RegistrarCuentaAhorroServicio,RegistrarCuentaAhorroRequest} from "../Aplicacion/cuentaahorro/RegistrarCuentaAhorroServicio";
import {
  ConsignacionCuentaAhorrosRequets,
  ConsignacionCuentaAhorrosServicios
} from "../Aplicacion/cuentaahorro/ConsignacionCuentaAhorrosServicios";
 import {RetirarCuentaAhorrosServicio,RetirarCuentaAhorrosRequest} from "../Aplicacion/cuentaahorro/RetirarCuentaAhorroServicio";

@Controller('Cuenta Corriente')
export class ControladorCuentaAhorro{
  constructor(private readonly IunidadTrabajo: UnidadTrabajo) {}

  @Post()
  async registraCuentaAhorro(@Body() request: RegistrarCuentaAhorroRequest){
    const service: RegistrarCuentaAhorroServicio = new RegistrarCuentaAhorroServicio(this.IunidadTrabajo);
    return await service.execute(request);
  }

  @Post()
  async consignarCuentaAhorro(@Body() request: ConsignacionCuentaAhorrosRequets){
    const service: ConsignacionCuentaAhorrosServicios = new ConsignacionCuentaAhorrosServicios(this.IunidadTrabajo);
    return await service.execute(request);
  }

  @Post()
  async retirarCuentaAhorro(@Body() request: RetirarCuentaAhorrosRequest){
    const service: RetirarCuentaAhorrosServicio = new RetirarCuentaAhorrosServicio(this.IunidadTrabajo);
    return await service.execute(request);
  }


}