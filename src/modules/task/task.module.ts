import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { TaskRepository } from './task.repository';

@Module({
  imports: [ 
    TypeOrmModule.forFeature( [ TaskEntity, TaskRepository ])
  ],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
