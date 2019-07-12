import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'aplication/json'
  });

  /* public data: any; */

public isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getLogged());
  data: any;

  constructor( private http: HttpClient ) { }

  registerUser$(name: string, email: string, password: string) {
    return this.http.post('http://localhost:3000/users',
{
  name, email, password
}, { headers: this.headers }).pipe(map(data => this.data ));
  }

  loginUser$( email: string, password: string ): Observable<any> {
    return this.http.post('http://localhost:3000/login',
{
   email, password
}, { headers: this.headers}).pipe(map(data => {
  localStorage.setItem('isLogged', 'true');
  this.isLogged.next(true);
  /* location.reload(); */
  return data;
} ));


  }
  public logOutUser$(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLogged');
  }
  public setToken( token): void {
    localStorage.setItem('accessToken', token);
  }
  public getToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (!(accessToken === undefined || accessToken === null)) {
    return accessToken;

} else {
  return null;
}
  }
   public getLogged(): boolean {
     if (localStorage.getItem('isLogged') === 'true') {
       return true;
     } else {
       return false;
     }
   }
}

