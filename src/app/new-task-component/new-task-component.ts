import { Component } from '@angular/core';
import { Teaser } from '../components/teaser/teaser';
import { Button } from '../components/button/button';

@Component({
  selector: 'app-new-task-component',
  imports: [Teaser, Button],
  templateUrl: './new-task-component.html',
  styleUrl: './new-task-component.css',
})
export class NewTaskComponent {}
