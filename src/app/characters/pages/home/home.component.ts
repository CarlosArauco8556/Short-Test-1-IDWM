import { Component, inject } from '@angular/core';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { CharacterService } from '../../services/character.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'character-page-home',
  standalone: true,
  imports: [ButtonsComponent, HttpClientModule],
  providers: [CharacterService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private characterService: CharacterService = inject(CharacterService); 
  public characters: any[] = [];
  
  async ngOnInit() {
    try {
      this.characters = await this.characterService.getCharacters(1);
      console.log('Personajes obtenidos:', this.characters);
    } catch (error) {
      console.error('Error al obtener personajes:', error);
    }
  }
}
