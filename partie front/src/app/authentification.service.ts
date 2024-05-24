import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private _http : HttpClient) { }
  public loginUtilisateur(user:User):Observable<any>{
    //console.log(user)
    return this._http.post<any>("http://localhost:8081/login",user);

}
}
