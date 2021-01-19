import {createConnection} from "typeorm";

export const database_Providers = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mongodb',
      url: 'mongodb+srv://segp_30:mementomori123z@cluster0.0zgwu.mongodb.net/financial_service?retryWrites=true&w=majority',
      logging: true,
      synchronize: true,
      useNewUrlParser: true,
      ssl: true,
      useUnifiedTopology: true,
      entities: ['dist/Infrastructure/Database/Orm/*.js']
    })
  }
]