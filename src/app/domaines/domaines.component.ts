import { Component, OnInit } from '@angular/core';
import { DomainesService } from '../service/domaines.service';
import { Domaine } from '../models/Domaine';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.css'],
  providers: [DomainesService]
})

export class DomainesComponent implements OnInit {

  domaines?: Domaine[];

  constructor(private domainesService: DomainesService, private accountService: AccountService) { }


  ngOnInit(): void {
    this.domainesService.getDomaines().subscribe(
      (data) => this.domaines = data
    );
  }

  deleteDomaine(id_domaine: any) {

    console.log("this is id_domaine: "+id_domaine);
    var new_id_domaine: number = +id_domaine;

    // This part deletes the legal field from the front html page
    let item1 = this.domaines?.find(i => i.id_domaine === new_id_domaine);
    this.domaines = this.domaines?.filter(obj => {return obj !== item1});

    // This part deletes the legal field from the back end
    return this.domainesService.deleteDomaine(new_id_domaine);

  }

  isUserAdmin() {

    return this.accountService.getUserIsAdmin();

  }

}
