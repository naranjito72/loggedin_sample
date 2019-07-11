import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'aplication/json'
  });

  public data: any;

  constructor( private http: HttpClient ) { }

  registerUser$(name: string, email: string, password: string) {
    return this.http.post('http://localhost:3000/users',
{
  name, email, password
}, { headers: this.headers}).pipe(map(data => this.data ));

  }

  loginUser$( email: string, password: string ) {
    return this.http.post('http://localhost:3000/login',
{
   email, password
}, { headers: this.headers}).pipe(map(data => this.data ));


  }
}

