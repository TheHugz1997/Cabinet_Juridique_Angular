import { Component, OnInit } from '@angular/core';
import { DomainesService } from '../service/domaines.service';
import { Domaine } from '../models/Domaine';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  providers: [ DomainesService ]
})


export class AcceuilComponent implements OnInit {

  domaines? : Domaine[];
  title = 'Cabinet Juridique';

  constructor(private domainesService: DomainesService) { }

  ngOnInit() {

    this.domainesService.getDomaines().subscribe(
      (data) => this.domaines = data
    );

  }
}

