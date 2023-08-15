import { Component } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur';
import { AccountService } from '../service/account.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AccountService ]
})


export class LoginComponent {

  constructor(private accountService: AccountService) { }

  onLogin( user: {mail_utilisateur: string, mot_de_passe: string}) {

    this.accountService.postConnexion(user);
    
  }

}
