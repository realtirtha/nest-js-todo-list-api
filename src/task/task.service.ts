import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/CreateTask.dto';
import { UpdateTaskDto } from './dtos/UpdateTask.dto';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from uuid

@Injectable()
export class TaskService {

    taskList = [
        {id: '1', title: 'read a book', description: 'reach at least one hour each day', completed: false},
        
    ];

    listTasks(){
        return this.taskList;
    }

    createTask(taskDetails: CreateTaskDto){
        const newTask = {
            id: uuidv4(),
            title: taskDetails.title,
            description: taskDetails.description,
            completed:false
        };

        this.taskList.push(newTask);
        console.log(this.taskList);

        return newTask;
    }

    getTaskById(id: string){
        const task = this.taskList.find(task => task.id === id);
        return task;
    }

    updateTaskById(id: string, updatedTask: UpdateTaskDto){
        const taskIndex = this.taskList.findIndex(task => task.id === id);

        if(taskIndex === -1){
            throw new NotFoundException(`Task with id ${id} not found.`);
        }

        const updatedTitle = updatedTask.title;
        const updatedDescription = updatedTask.description;

        this.taskList[taskIndex].title = updatedTitle;
        this.taskList[taskIndex].description = updatedDescription;

        return this.taskList;
    }

    deleteTaskById(id: string){
        const taskIndex = this.taskList.findIndex(task => task.id === id);

        if (taskIndex === -1) {
            throw new NotFoundException(`Task with id ${id} not found.`);
        }

        const deletedTask = this.taskList.splice(taskIndex, 1)[0]; // Removing task

        return deletedTask;
    }

}
