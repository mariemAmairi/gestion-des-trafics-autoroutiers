import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accident } from './accident';

@Injectable({
  providedIn: 'root'
})
export class AccidentService {

  private baseURL = "http://localhost:8081/accidentList";

  constructor(private httpClient: HttpClient) { }
  getAccidentList(): Observable<Accident[]>{
    return this.httpClient.get<Accident[]>(`${this.baseURL}`);
  }
  crateAccident(accident: Accident): Observable<Object>{
    return this.httpClient.post('http://localhost:8081/addAccident' , accident);
  }
  getAccidentById(id:number): Observable<Accident>{
    return this.httpClient.get<Accident>("http://localhost:8081/accidentById/" +id);
  }
  updateAccident(id:number, accident:Accident): Observable<Object>{
    return this.httpClient.put("http://localhost:8081/updateAccident/" +id , accident);
  }
}
