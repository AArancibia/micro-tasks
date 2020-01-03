import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
const path = require('path');

const dbOptions = config.get('db');
console.log( path.join( __dirname, '/../../../dist/' ) );

const newPath = path.join( __dirname, '/../../../' );

export const databaseOptions: TypeOrmModuleOptions = {
  name: "default",
  type: dbOptions.type,
  port: dbOptions.port,
  database: dbOptions.name,
  username: dbOptions.username,
  password: dbOptions.password,
  logging: dbOptions.logging,
  entities: [
    //newPath + '/src/**/*.entity.ts',
    //newPath + '/dist/**/*.entity.js'
  ],
  host: dbOptions.host,
  synchronize: dbOptions.synchronize,
}
