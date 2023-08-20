import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domaine } from '../models/Domaine';
import { Body } from '@angular/http/src/body';


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

  addDomaine(domaine: Domaine) {

    console.log(domaine);
    
    return this.http.post(`/api/domaine/creation`, domaine).subscribe(
      (data) => { console.log(data)}
    );

  }

}
