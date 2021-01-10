import { Module } from '@nestjs/common';
import { ModuloAplicacion } from "./Aplicacion/ModuloAplicacion";
import { ControladorModulo } from "./Controladores/ControladorModulo";
import { Infraestructuramodulo } from "./Infraestructura/Infraestructuramodulo";

@Module({
  imports: [
    ModuloAplicacion,
    ControladorModulo,
    Infraestructuramodulo
  ],
})
export class AppModule {}
