import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseURL;
  private _auth: Auth | undefined;

  constructor( private http: HttpClient) { }

  verificarAutenticacion():Observable<boolean> {

    if (!localStorage.getItem('id')) {

      return of (false);

    }
      return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
        map (auth => {
          this._auth = auth;
          return true;
        })
      )

  }


  get auth(): Auth {
    return {...this._auth!}
  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe (
              tap( auth => this._auth = auth),
              tap(auth => localStorage.setItem( 'id', auth.id))
            );
  }




}
