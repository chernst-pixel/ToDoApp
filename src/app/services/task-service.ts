import { Injectable, signal, computed } from '@angular/core';
import { tasks } from '../shared/data/task';
import { Task } from '../shared/models/task';

@Injectable({
    providedIn: 'root',
})
export class TaskService{
    taskList    = tasks;
    todos       = signal<Task[]>(this.taskList);
    filter      = signal<'all' | 'complete' | 'incomplete'>('all');

    getAllTask(){
        return this.filteredTasks;
    }

    addNewTask(taskName: string){
        const newTaskObject =  {
            id:         this.taskList.length + 1,
            name :      taskName,
            status:     'incomplete',
            checked:    false,
        };

        this.todos.update(tasks => [...tasks, newTaskObject])
    }

    updateTask(todo: Task){
        this.taskList.map((task) => {
            if(task.id === todo.id){
                return todo
            }
            return task;
        });
    }

    filteredTasks = computed(() =>{
        const tasks = this.todos();
        const currentFilter = this.filter();

        switch(currentFilter) {
            case 'complete' :
                return tasks.filter(t => t.status === 'complete');

            case 'incomplete' :
                return tasks.filter(t => t.status === 'incomplete');

            default:
                return tasks;
        }
    })
}