import { Injectable, signal } from '@angular/core';
import { tasks } from '../data/task';
import { Task } from '../models/task';

@Injectable({
    providedIn: 'root',
})
export class TaskService{
    taskList = tasks;
    todos = signal<Task[]>(this.taskList);

    getAllTask(){
        return this.todos;
    }

    addNewTask(taskName: string){
        const newTaskObject =  {
            id:         this.taskList.length + 1,
            name :      taskName,
            status:     'incomplete',
            checked:    false,
        };

        this.taskList.push(newTaskObject);
    }
}