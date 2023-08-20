import { Component } from '@angular/core';
import { RendezvousService } from '../service/rendezvous.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent {

  constructor(private rendezVousService: RendezvousService, private route: Router) {}

  onTaking(date: any) {

    let date_to_send = date.date_day + " " + date.date_time;

    this.rendezVousService.postRendezVous(date_to_send);

    this.route.navigate(['']);

  }

}
