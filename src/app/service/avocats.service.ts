import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Avocat } from '../models/Avocat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AvocatsService {

  constructor(private http: HttpClient) { }

  getAvocats(): Observable<Avocat[]> {

    return this.http.get<Avocat[]>('/api/avocats');

  }

  getAvocat(id_avocat: any) {

    return this.http.get(`/api/avocat/${id_avocat}`);

  }

  deleteAvocat(id_avocat: number) {

    return this.http.delete(`/api/avocat/${id_avocat}`).subscribe(
      (data) => console.log(data)
    );

  }
}
