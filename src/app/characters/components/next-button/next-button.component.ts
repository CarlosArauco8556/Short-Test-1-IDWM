import { Component } from '@angular/core';

@Component({
  selector: 'next-button',
  standalone: true,
  imports: [],
  templateUrl: './next-button.component.html',
  styleUrl: './next-button.component.css'
})
export class NextButtonComponent {

  constructor() {}

  nextPage() {
    console.log('Next page');
  }

}
