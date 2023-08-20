import { Component } from '@angular/core';
import { Domaine } from '../models/Domaine';
import { DomainesService } from '../service/domaines.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-domaine',
  templateUrl: './creation-domaine.component.html',
  styleUrls: ['./creation-domaine.component.css']
})

export class CreationDomaineComponent {

  constructor(private domaineService: DomainesService, private router: Router) { }
  
  creationLegalField (domaine: Domaine) {

    this.domaineService.addDomaine(domaine);

    this.router.navigate(['']);

  }

}
