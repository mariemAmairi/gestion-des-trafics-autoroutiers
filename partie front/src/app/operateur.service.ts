import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operateur } from './operateur';
import { User } from './user';

@Injectable({
providedIn: 'root'
})
export class OperateurService {
private baseURL = 'http://localhost:8081/userList';

constructor(private httpClient: HttpClient) { }

getOperateurList(): Observable<Operateur[]> {
return this.httpClient.get<Operateur[]>(this.baseURL);
}
crateOperateur(operateur: User): Observable<Object>{
  return this.httpClient.post('http://localhost:8081/SignUp' , operateur);

}

getOperateurById(id: number): Observable<User> {
return this.httpClient.get<User>("http://localhost:8081/userById/"+id);
}
updateTrafic(id: number, operateur: User): Observable<Object>{
  return this.httpClient.put("http://localhost:8081/updateUser/"+id, operateur);

}

deleteOperateur(id: number): Observable<Object> {
return this.httpClient.delete("http://localhost:8081/deleteUser/"+id);
}
}
