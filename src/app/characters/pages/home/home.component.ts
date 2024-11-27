import { Component } from '@angular/core';
import { NextButtonComponent } from '../../components/next-button/next-button.component';
import { PreviousButtonComponent } from '../../components/previous-button/previous-button.component';

@Component({
  selector: 'character-page-home',
  standalone: true,
  imports: [NextButtonComponent, PreviousButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
