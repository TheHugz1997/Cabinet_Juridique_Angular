import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../models/Utilisateur';
import * as moment from "moment";
import { RendezVous } from '../models/RendezVous';


@Injectable({
  providedIn: 'root'
})


export class RendezvousService {

  constructor(private http: HttpClient) { }

  postRendezVous(rendezvous: any) {

    let id_avocat = localStorage.getItem("id_avocat_rendez_vous");

    let new_rendezvous = {id_avocat: id_avocat, date: rendezvous}

    return this.http.post(`/api/avocat/horaire`, new_rendezvous).subscribe();

  }

}
