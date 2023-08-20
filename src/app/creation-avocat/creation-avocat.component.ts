import { Component } from '@angular/core';
import { Avocat } from '../models/Avocat';
import { AvocatsService } from '../service/avocats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-avocat',
  templateUrl: './creation-avocat.component.html',
  styleUrls: ['./creation-avocat.component.css']
})


export class CreationAvocatComponent {

  constructor(private avocatsService: AvocatsService, private router: Router) { }

  creationLawyer (avocat: Avocat) {

    console.log("this is avocat : "+ avocat);

    this.avocatsService.addAvocat(avocat);

    this.router.navigate(['']);

  }

}
