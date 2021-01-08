import {Body, Controller, Post} from "@nestjs/common";
import {IunidadTrabajo} from "../Infraestructura/base/IunidadTrabajo";
import {RegistrarCuentaAhorroServicio,RegistrarCuentaAhorroRequest} from "../Aplicacion/cuentacorriente/RegistrarCuentaAhorroServicio";

@Controller('Cuenta Corriente')
export class ControladorCuentaAhorro{
  constructor(private readonly IunidadTrabajo: IunidadTrabajo) {}

  @Post()
  async registraCuentaAhorro(@Body() request: RegistrarCuentaAhorroRequest){
    const service: RegistrarCuentaAhorroServicio = new RegistrarCuentaAhorroServicio(this.IunidadTrabajo);
    return await service.execute(request);
  }

}