import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ResponseAPIGetAll } from '../interfaces/ResponseAPIGetAll';
import { Info } from '../interfaces/Info';
import { Character } from '../interfaces/Character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://rickandmortyapi.com/api/character';
  public errors: string[] = [];
  private http = inject(HttpClient);



  async getCharacters(numberPage: number, name: string): Promise<ResponseAPIGetAll> {
    try{
      const response = await firstValueFrom(
        this.http.get<{ info: Info; results: Character[] }>(`${this.baseUrl}/?page=${numberPage} &name=${name}`)
      );
      return Promise.resolve(response); 
    }catch (error) {
      console.log('Error en getAllCharacters.', error); 
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error);
    }
  }
}
