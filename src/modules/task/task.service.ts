import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor(
        private taskRepository: TaskRepository
    ) {}

    async getTasks(): Promise<any> {
        const tasks = await this.taskRepository.find();
        return tasks;
    }
}
