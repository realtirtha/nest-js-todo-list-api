import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/CreateTask.dto';
import { UpdateTaskDto } from './dtos/UpdateTask.dto';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){

    }

    @Get('')
    getTasks(){
        const tasks = this.taskService.listTasks();
        return tasks;
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) taskId: number){
        const task = this.taskService.getTaskById(taskId);
        if(!task){
            throw new NotFoundException(`Task with id ${taskId} not found.`);
        }
        return task;
    }

    @Post('create')
    createTask(@Body() createTaskDto: CreateTaskDto){
        return this.taskService.createTask(createTaskDto);
    }

    @Put(':id')
    updateTask(@Param('id', ParseIntPipe) taskId: number, @Body() updatedTask: UpdateTaskDto){
        const task = this.taskService.updateTaskById(taskId, updatedTask);
        return task;
    }

    @Delete()
    deleteTask(){

    }
}
