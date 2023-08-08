import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/CreateTask.dto';
import { UpdateTaskDto } from './dtos/UpdateTask.dto';

@Injectable()
export class TaskService {

    private idNum = 1;
    taskList = [
        {id: 1, title: 'read a book', description: 'reach at least one hour each day', completed: false},
        
    ];

    listTasks(){
        return this.taskList;
    }

    createTask(taskDetails: CreateTaskDto){
        const newTask = {id: this.idNum,
            title: taskDetails.title,
            description: taskDetails.description,
            completed:false
        };

        this.taskList.push(newTask);
        this.idNum++;
        console.log(this.taskList);

        return newTask;
    }

    getTaskById(id: number){
        const task = this.taskList.find(task => task.id === id);
        return task;
    }

    updateTaskById(id: number, updatedTask: UpdateTaskDto){
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

    deleteTaskById(id: number){
        const taskIndex = this.taskList.findIndex(task => task.id === id);

        if (taskIndex === -1) {
            throw new NotFoundException(`Task with id ${id} not found.`);
        }

        const deletedTask = this.taskList.splice(taskIndex, 1)[0]; // Removing task

        return deletedTask;
    }

}
