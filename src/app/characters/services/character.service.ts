import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseAPIGetAll } from '../interfaces/ResponseAPIGetAll';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://rickandmortyapi.com/api/character';
  public errors: string[] = [];
  private http = inject(HttpClient);



  async getCharacters(numberPage: number): Promise<ResponseAPIGetAll[]> {
    try{
      const response = await firstValueFrom(
        this.http.get<{ info: any; results: any[] }>(`${this.baseUrl}/?page=${numberPage}`)
      );
      return Promise.resolve(response.results); 
    }catch (error) {
      console.log('Error en getAllCharacters.', error); 
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error);
    }
  }
}
