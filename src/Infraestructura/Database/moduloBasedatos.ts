import { Module } from "@nestjs/common";
import { databaseProviders } from "./provedor/databaseProviders";
import { currentAccountProvider, savingAccountProvider } from "./migracion/provedorEntidades";

@Module({
  providers:[
    ...databaseProviders,
    ...currentAccountProvider,
    ...savingAccountProvider,
  ],
  exports: [
    ...databaseProviders,
    ...currentAccountProvider,
    ...savingAccountProvider,
  ],

})

export class moduloBasedatos{}