import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http
      .get(`${this.url}/users?per_page=10&delay=5`)
      .pipe(map((response) => response['data']));
  }
}
