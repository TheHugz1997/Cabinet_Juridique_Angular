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

    return this.http.get<Domaine[]>('/api/domaines');
    
  }

  postLien(id_domaine: any, id_avocat: any) {
    return this.http.post(`/api/domaine/${id_domaine}/avocat/${id_avocat}/relation`, {});
  }

  deleteLien(id_domaine: any, id_avocat: any) {
    return this.http.delete(`/api/domaine/${id_domaine}/avocat/${id_avocat}/relation`);
  }

  deleteDomaine(id_domaine: number) {

    return this.http.delete(`/api/domaine/${id_domaine}`).subscribe();

  }

}
