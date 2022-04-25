import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { DatabaseService } from './database.service';

const databasePoolFactory = async (configService: ConfigService) => {
  return new Pool({
    user: configService.get('POSTGRES_USER'),
    host: configService.get('POSTGRES_HOST'),
    database: configService.get('POSTGRES_DB'),
    // TODO: Fix Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string') when doing: 
    // password: configService.get('POSTGRES_PASSWORD'),
    password: 'pgpwd',
    port: configService.get('POSTGRES_PORT'),
  });
};

@Module({
  providers: [
    {
      provide: 'DATABASE_PROVIDER',
      inject: [ConfigService],
      useFactory: databasePoolFactory,
    },
    DatabaseService,
  ],
  exports: [DatabaseService],
})
export class DatabaseModule {}
