import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { FilterControls } from './filter-controls/filter-controls';
import { NewTaskComponent } from './new-task-component/new-task-component';
import { TaskListComponent } from './task-list-component/task-list-component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterControls, NewTaskComponent, TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('name');
}
