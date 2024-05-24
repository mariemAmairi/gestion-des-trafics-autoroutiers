import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Trafic } from './trafic';
@Injectable({
  providedIn: 'root'
})
export class TraficService {

  private baseURL = "http://localhost:8081/traficList";

  constructor(private httpClient: HttpClient) { }
  getTraficList(): Observable<Trafic[]>{
    return this.httpClient.get<Trafic[]>(`${this.baseURL}`);
  }
  crateTrafic(trafic: Trafic): Observable<Object>{
    return this.httpClient.post('http://localhost:8081/addTrafic' , trafic);
  }
  getTraficById(id:number): Observable<Trafic>{
    return this.httpClient.get<Trafic>("http://localhost:8081/traficById/" +id);
  }
  updateTrafic(id:number, trafic:Trafic): Observable<Object>{
    return this.httpClient.put("http://localhost:8081/updateTrafic/"+id , trafic);
  }
}
