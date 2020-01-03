import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseOptions } from './database.provider';

@Module({
    imports: [
        TypeOrmModule.forRoot( databaseOptions )
    ]
})
export class DatabaseModule {}
