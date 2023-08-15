import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {

  constructor(private accountService: AccountService) {}

  notLogged() {

    return this.accountService.isLoggedOut();

  }

  displayUserMail() {
    
    return this.accountService.getUserMail();

  }

  loggedIn() {

    return this.accountService.isLoggedIn();

  }

  logOut() {

    return this.accountService.getLogOut();

  }

  isUserAdmin() {

    return this.accountService.getUserIsAdmin();

  }

}
