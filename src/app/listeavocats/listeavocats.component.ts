import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AvocatsService } from '../service/avocats.service';
import { Avocat } from '../models/Avocat';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-listeavocats',
  templateUrl: './listeavocats.component.html',
  styleUrls: ['./listeavocats.component.css'],
  providers: [AvocatsService]
})

export class ListeavocatsComponent implements OnInit {

  avocats?: Avocat[];
  title = "Liste des avocats";

  constructor(private avocatsService: AvocatsService, private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {
    const id_domaine = Number(this.route.snapshot.paramMap.get('id_domaine'));

    this.avocatsService.getAvocats().subscribe((data) => {
      this.avocats = id_domaine
        ? data.filter(d => d.Domaines?.map(dom => dom.id_domaine).includes(id_domaine))
        : data
    });
  }

  deleteAvocat(id_avocat: any) {

    var new_id_avocat: number = +id_avocat;
    return this.avocatsService.deleteAvocat(id_avocat);

  }

  isUserAdmin() {

    return this.accountService.getUserIsAdmin();

  }

}
