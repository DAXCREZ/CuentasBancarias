import { Module } from '@nestjs/common';
import { ModuloAplicacion } from "./Aplicacion/ModuloAplicacion";
import { ControladorModulo } from "./Controladores/ControladorModulo";
import { InfraestructuraModulo } from "./Infraestructura/InfraestructuraModulo";

@Module({
  imports: [
    ModuloAplicacion,
    ControladorModulo,
    InfraestructuraModulo
  ],
})
export class AppModule {}
