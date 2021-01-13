import {createConnection} from "typeorm";

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mongodb',
      url: 'mongodb+srv://Tumama12:Tumama12@cluster0.ijsb5.mongodb.net/bancoDB?retryWrites=true&w=majority',
      logging: true,
      synchronize: true,
      useNewUrlParser: true,
      ssl: true,
      entities: ['dist/Infraestructura/Database/orm/*.js']
    })
  }
]