import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'buttons',
  standalone: true,
  imports: [HttpClientModule],
  providers: [CharacterService],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  private characterService: CharacterService = inject(CharacterService); 
  public currentPage: number = 1;
  public characters: any[] = [];

  constructor() {}

  async nextPage(): Promise<void> {
    this.currentPage++;
    await this.fetchCharacters();
  }

  async previousPage(): Promise<void> {
    if (this.currentPage > 1) {
      this.currentPage--; 
      await this.fetchCharacters(); 
    }
  }

  private async fetchCharacters(): Promise<void> {
    try {
      this.characters = await this.characterService.getCharacters(this.currentPage);
      console.log('Personajes obtenidos:', this.characters);
    } catch (error) {
      console.error('Error al obtener personajes:', error);
    }
  }
}
