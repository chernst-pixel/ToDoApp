import { Component, input, inject } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  task = input.required<Task>();
  taskService = inject(TaskService);

  toggleTask(){
    this.task().checked = !this.task().checked
    if (this.task().status === 'incomplete') {
      this.task().status = 'complete';
    } else {
      this.task().status = 'incomplete';
    }

    this.taskService.updateTask(this.task());
  }
}
