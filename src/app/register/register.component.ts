import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Utilisateur } from '../models/Utilisateur';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ AccountService ]
})


export class RegisterComponent {

  constructor(private accountService: AccountService, private router: Router) { }

  onRegister( user: {nom_utilisateur: string, mail_utilisateur: string, mot_de_passe: string, telephone: string}) {

    this.accountService.postInscription(user);

    this.router.navigate(['/connexion']);
    
  }

}