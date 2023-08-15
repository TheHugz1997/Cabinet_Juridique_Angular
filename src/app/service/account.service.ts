import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../models/Utilisateur';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})


export class AccountService {

  constructor(private http: HttpClient) { }

  postConnexion(user: Utilisateur) {
    this.http.post('/api/connexion', user).subscribe(
      (data: any) => {
        this.storeData(data, user)
      }
    );
  }

  postInscription(user: Utilisateur) {

    this.http
      .post('/api/inscription', user)
      .subscribe(
        (data) => {
          console.log(data)
        }
      );
  }

  getLogOut() {
    this.http.get('/api/logout').subscribe(() => {
      this.logout();
    })
  }

  private storeData(data: any, user: any) {
    const expiresAt = moment().add(data.maxAge,'second');
    localStorage.setItem('currentUser', user.mail_utilisateur);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('is_admin', data.is_admin);
  }

  getUserMail() {
    const mail_utilisateur = localStorage.getItem("currentUser");
    return mail_utilisateur;
  }

  getUserIsAdmin() {

    const is_admin = localStorage.getItem("is_admin");

    const boolValue = is_admin === 'true';

    return boolValue;

  }

  logout() {

    localStorage.removeItem("currentUser");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("is_admin");
    
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse("" + expiration);
    return moment(expiresAt);
  }
}
