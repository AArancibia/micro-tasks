import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity('tasks')
export class TaskEntity {
    @PrimaryGeneratedColumn('uuid')
    idtask: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}