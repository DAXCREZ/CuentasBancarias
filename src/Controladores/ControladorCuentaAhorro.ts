import {Body, Controller, Post} from "@nestjs/common";
import {UnidadTrabajo} from "../Infraestructura/base/UnidadTrabajo";
import {RegistrarCuentaAhorroServicio,RegistrarCuentaAhorroRequest} from "../Aplicacion/cuentaahorro/RegistrarCuentaAhorroServicio";

@Controller('Cuenta Corriente')
export class ControladorCuentaAhorro{
  constructor(private readonly IunidadTrabajo: UnidadTrabajo) {}

  @Post()
  async registraCuentaAhorro(@Body() request: RegistrarCuentaAhorroRequest){
    const service: RegistrarCuentaAhorroServicio = new RegistrarCuentaAhorroServicio(this.IunidadTrabajo);
    return await service.execute(request);
  }

}