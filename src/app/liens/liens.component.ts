import { Component } from '@angular/core';
import { Avocat } from '../models/Avocat';
import { AvocatsService } from '../service/avocats.service';
import { Domaine } from '../models/Domaine';
import { DomainesService } from '../service/domaines.service';

@Component({
  selector: 'app-liens',
  templateUrl: './liens.component.html',
  styleUrls: ['./liens.component.css']
})
export class LiensComponent {
  avocats?: Avocat[];
  currentAvocat?: Avocat;
  allDomaines?: Domaine[];

  constructor(private avocatsService: AvocatsService, private domainesService: DomainesService) { }

  ngOnInit(): void {
    this.loadAvocats();
    this.loadDomaines();
  }

  private loadAvocats() {
    this.avocatsService.getAvocats().subscribe((data) => {
      this.avocats = data;
      if (data && data.length > 0 && !this.currentAvocat) {
        this.currentAvocat = data[0];
      }
    });
  }

  private loadDomaines() {
    this.domainesService.getDomaines().subscribe((data) => {
      this.allDomaines = data;
    });
  }

  selectAvocatByIndex(index: number) {
    if (this.avocats && this.avocats.length > 0) {
      this.currentAvocat = this.avocats[index];
    }
  }

  selectAvocat(avocat: Avocat) {
    this.currentAvocat = avocat
  }

  getCurrentDomaines(): Domaine[] {
    return (this.currentAvocat && this.currentAvocat.Domaines) ? this.currentAvocat.Domaines : [];
  }

  shouldCheckDomain(domaine: Domaine) {
    return this.getCurrentDomaines().find(dom => dom.id_domaine == domaine.id_domaine);
  }

  toggle(domaine: Domaine, event: any, index: number) {
    if (this.currentAvocat && domaine) {
      let id_domaine = domaine.id_domaine;
      let id_avocat = this.currentAvocat.id_avocat;
      let checkbox = document.getElementById("" + index) as HTMLInputElement;
      if (event.target.checked) {
        this.domainesService.postLien(id_domaine, id_avocat).subscribe((data) => this.loadAvocats())
      } else {
        this.domainesService.deleteLien(id_domaine, id_avocat).subscribe(
          (data) => this.loadAvocats(),
          (error) => checkbox.checked = true
        )
      }
    }
  }
}
