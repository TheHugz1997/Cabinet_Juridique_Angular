import { Component, OnInit } from '@angular/core';
import { AvocatsService } from '../service/avocats.service';
import { Avocat } from '../models/Avocat';


@Component({
  selector: 'app-listeavocats',
  templateUrl: './listeavocats.component.html',
  styleUrls: ['./listeavocats.component.css'],
  providers: [ AvocatsService]
})


export class ListeavocatsComponent implements OnInit {

  avocats? : Avocat[];
  title = "Liste des avocats";

  constructor(private avocatsService: AvocatsService){}

  ngOnInit(): void {

    this.avocatsService.getAvocats().subscribe(
      (data) => this.avocats = data
    );

  }

}
