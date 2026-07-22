import { Component } from '@angular/core';
import { Teaser } from '../components/teaser/teaser';
import { Button } from '../components/button/button';


@Component({
  selector: 'app-filter-controls',
  imports: [Teaser, Button],
  templateUrl: './filter-controls.html',
  styleUrl: './filter-controls.css',
})
export class FilterControls {}
