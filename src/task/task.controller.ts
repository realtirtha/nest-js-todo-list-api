import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/CreateTask.dto';
import { UpdateTaskDto } from './dtos/UpdateTask.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger/dist';

@ApiTags('task')
@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){

    }

    @Get('')
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Success' }) 
    getTasks(){
        const tasks = this.taskService.listTasks();
        return tasks;
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get task by ID' })
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 404, description: 'Task not found' })
    async getById(@Param('id') taskId: string){
        const task = await this.taskService.getTaskById(taskId);
        if (!task) {
            throw new HttpException(`Task with ID ${taskId} not found`, HttpStatus.NOT_FOUND);
          }
        return task;
    }

    @Post('create')
    @ApiOperation({ summary:'Create a new task' }) 
    @ApiResponse({ status: 201, description: 'Task created successfully' })
    createTask(@Body() createTaskDto: CreateTaskDto){
        return this.taskService.createTask(createTaskDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update task by ID' }) 
    @ApiResponse({ status: 200, description: 'Success' }) 
    @ApiResponse({ status: 404, description: 'Task not found' })
    updateTask(@Param('id') taskId: string, @Body() updatedTask: UpdateTaskDto){
        const task = this.taskService.updateTaskById(taskId, updatedTask);
        return task;
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete task by ID' }) 
    @ApiResponse({ status: 200, description: 'Success' }) 
    @ApiResponse({ status: 404, description: 'Task not found' })
    deleteTask(@Param('id') taskId: string){
        const task = this.taskService.deleteTaskById(taskId);
        return task;

    }
}
