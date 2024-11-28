import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Info } from '../../interfaces/Info';
import { Character } from '../../interfaces/Character';


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
  public characters: Character[] = [];
  public info: Info = {count: 0, pages: 0, next: '', prev: ''};
  public currentPage: number = 1;
  public nameCharacter: string = '';

  constructor() {
    this.fetchCharacters()
  }

  async nextPage(): Promise<void> {
    if(this.info.next === null) {
      console.log('No hay páginas siguientes.');
    } 
    else{
      this.currentPage++;
      await this.fetchCharacters();
      console.log('Página:', this.currentPage, '\nNombre personajes:', this.nameCharacter);
    }
  }

  async previousPage(): Promise<void> {
    if(this.info.prev === null) {
      console.log('No hay páginas anteriores.');
    } 
    else{
      this.currentPage--;
      await this.fetchCharacters();
      console.log('Página:', this.currentPage, '\nNombre personajes:', this.nameCharacter);
    }
  }

  private async fetchCharacters(): Promise<void> {
    try {
      const response = await this.characterService.getCharacters(this.currentPage, this.nameCharacter);
      this.characters = response.results;
      this.info = response.info;
      console.log('Personajes obtenidos:', this.characters);
    } catch (error) {
      console.error('Error al obtener personajes:', error);
    }
  }

  public async filterCharactersByName(name: string): Promise<void> {
    try {
      this.characters = [];
      this.currentPage = 1;
      const response = await this.characterService.getCharacters(this.currentPage, this.nameCharacter);
      this.characters = response.results;
      this.info = response.info;
      console.log('Personajes filtrados por nombre: ' , name, this.characters);
    } catch (error) {
      console.error('Error al obtener personajes filtrados por nombre:', name , error);
    }
  }  
}
