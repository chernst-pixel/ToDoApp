import { Component, inject }  from '@angular/core';
import { Teaser }             from '../components/teaser/teaser';
import { TaskComponent }      from './task/task';
import { TaskService }        from '../services/task-service';

@Component({
  selector: 'app-task-list-component',
  imports: [Teaser, TaskComponent],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
})
export class TaskListComponent {
  taskService = inject(TaskService);
  tasklist    = this.taskService.getAllTask();
}
