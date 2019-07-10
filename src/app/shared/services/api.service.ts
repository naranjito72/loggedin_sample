import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface User {
  _id: string;
  id: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers$() {
    return this.http.get('http://localhost:3000/users/');
  }
  getUser$(id: string) {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  addUser$(user:User) {
    return this.http.post<User>('http://localhost:3000/users/', user)
      .pipe(tap((user: User) => console.log(`added Member: id=${user.id}`)),
            catchError((err, caught) => caught))

  }
}
