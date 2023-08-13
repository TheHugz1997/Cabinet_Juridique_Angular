import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Avocat } from '../models/Avocat';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AvocatsService {

  constructor(private http: HttpClient) { }

  getAvocats(): Observable<Avocat[]> {

    return this.http.get<Avocat[]>('http://pat.infolab.ecam.be:60838/avocats');
    
  }
}
