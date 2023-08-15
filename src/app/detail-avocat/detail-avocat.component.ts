import { Component, OnInit } from '@angular/core';
import { AvocatsService } from '../service/avocats.service';
import { Avocat } from '../models/Avocat';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-avocat',
  templateUrl: './detail-avocat.component.html',
  styleUrls: ['./detail-avocat.component.css']
})


export class DetailAvocatComponent implements OnInit {

  constructor(private avocatsService: AvocatsService, private route: ActivatedRoute) { }

  avocat : any;

  ngOnInit() {

    const id_avocat = Number(this.route.snapshot.paramMap.get('id_avocat'));

    return this.avocatsService.getAvocat(id_avocat).subscribe(
      (data) => {
        this.avocat = data;
    })

  }


}
