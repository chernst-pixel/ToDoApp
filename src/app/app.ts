import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { FilterControls } from './filter-controls/filter-controls';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterControls],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('name');
}
