import { Component } from '@angular/core';

@Component({
  selector: 'previous-button',
  standalone: true,
  imports: [],
  templateUrl: './previous-button.component.html',
  styleUrl: './previous-button.component.css'
})
export class PreviousButtonComponent {
  
  constructor() {}

  previousPage() {
    console.log('Previous page');
  }
}
