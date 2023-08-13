import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domaine } from '../models/Domaine';


@Injectable({
  providedIn: 'root'
})
export class DomainesService {

  constructor(private http: HttpClient) { }

  getDomaines(): Observable<Domaine[]> {

    return this.http.get<Domaine[]>('http://pat.infolab.ecam.be:60838/domaines');
    
  }

}
