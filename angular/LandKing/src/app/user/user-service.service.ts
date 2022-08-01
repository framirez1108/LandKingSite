import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  public url: string = 'http://localhost:8080';
  public apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
    console.log("AHH")
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/usr`);
  }

  public getSpecificUser(userId: number): Observable<User> {
    userId = 1;
    console.log((`${this.apiServerUrl}/usr${userId}`));
    return this.http.get<User>(`${this.apiServerUrl}/usr?userId=${userId}`)
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/usr`, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}`, user);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/demo/delete/${userId}`);
  }

}
