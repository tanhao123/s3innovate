import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot({
  envFilePath: ['config/.env'],
});
//All schema update and write operations are performed using master server.
//All simple queries performed by find methods or select query builder are using a random slave instance.
const config = {
  type: 'postgres',
  logging: true,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['./dist/**/entities/*.entity.{ts,js}'],
  migrations: ['./dist/database/migration/*.{ts,js}'],
  autoLoadEntities: true,
  synchronize: true //Set false if tables are already
  // replication: {
  //   master: {
  //     host: process.env.DB_HOST,
  //     port: parseInt(process.env.DB_PORT),
  //     username: process.env.DB_USERNAME,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_DATABASE,
  //   },
  //   slaves: [
  //     {
  //       host: process.env.DB_HOST,
  //       port: parseInt(process.env.DB_PORT1),
  //       username: process.env.DB_USERNAME,
  //       password: process.env.DB_PASSWORD,
  //       database: process.env.DB_DATABASE,
  //       synchronize: true,
  //     },
  //   ],
  // },
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);

