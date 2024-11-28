import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'buttons',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [CharacterService],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  private characterService: CharacterService = inject(CharacterService); 
  public currentPage: number = 1;
  public characters: any[] = [];
  public filteredCharacters: any[] = []; 
  public searchQuery: string = ''; 

  constructor() {
    this.fetchCharacters()
  }

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
      const response = await this.characterService.getCharacters(this.currentPage);
      this.characters = response;
      console.log('Personajes obtenidos:', this.characters);
    } catch (error) {
      console.error('Error al obtener personajes:', error);
    }
  }

  public filterCharacters(): void {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(query)
    );
  }
}
