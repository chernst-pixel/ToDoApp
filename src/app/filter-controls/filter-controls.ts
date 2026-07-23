import { Component, inject } from '@angular/core';
import { Teaser } from '../components/teaser/teaser';
import { Button } from '../components/button/button';
import { TaskService } from '../services/task-service';


@Component({
  selector: 'app-filter-controls',
  imports: [Teaser, Button],
  templateUrl: './filter-controls.html',
  styleUrl: './filter-controls.css',
})
export class FilterControls {
  taskService = inject(TaskService)

  showAll() {
    this.taskService.filter.set('all')
    console.log("all")
  }

  showComplete() {
    this.taskService.filter.set('complete')
    console.log("complete")
  }

  showIncomplete() {
    this.taskService.filter.set('incomplete')
    console.log("incomplete")
  }

  
}
