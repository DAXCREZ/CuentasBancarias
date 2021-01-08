import {Body, Controller, Post} from "@nestjs/common";
import {IunidadTrabajo} from "../Infraestructura/base/IunidadTrabajo";
import { RegistrarCuentaCorrienteServicios,
  RegistrarCuentaCorrienteRequest} from "../Aplicacion/cuentacorriente/RegistrarCuentaCorrienteServicios";

@Controller('Cuenta Corriente')
export class ControladorCuentaCorriente{
  constructor(private readonly IunidadTrabajo: IunidadTrabajo) {}

  @Post()
  async registraCuentaCorriente(@Body() request: RegistrarCuentaCorrienteRequest){
    const service: RegistrarCuentaCorrienteServicios = new RegistrarCuentaCorrienteServicios(this.IunidadTrabajo);
    return await service.execute(request);
  }

}
