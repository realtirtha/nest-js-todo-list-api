import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus, ParseIntPipe, NotFoundException } from '@nestjs/common';
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
    async getById(@Param('id') taskId: string){
        const task = await this.taskService.getTaskById(taskId);
        if (!task) {
            throw new HttpException(`Task with ID ${taskId} not found`, HttpStatus.NOT_FOUND);
          }
        return task;
    }

    @Post('create')
    createTask(@Body() createTaskDto: CreateTaskDto){
        return this.taskService.createTask(createTaskDto);
    }

    @Put(':id')
    updateTask(@Param('id') taskId: string, @Body() updatedTask: UpdateTaskDto){
        const task = this.taskService.updateTaskById(taskId, updatedTask);
        return task;
    }

    @Delete(':id')
    deleteTask(@Param('id') taskId: string){
        const task = this.taskService.deleteTaskById(taskId);
        return task;

    }
}
