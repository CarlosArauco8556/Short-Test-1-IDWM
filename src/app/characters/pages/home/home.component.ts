import { Component } from '@angular/core';
import { ButtonsComponent } from '../../components/buttons/buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
