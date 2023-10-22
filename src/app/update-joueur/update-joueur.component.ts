import { Component } from '@angular/core';
import { JoueurService } from '../services/joueur.service';
import { ActivatedRoute } from '@angular/router';
import { joueur } from '../modele/joueur.modele';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent {
  currentjoueur = new joueur;
  constructor(private activatedRoute: ActivatedRoute,
    private produitService: JoueurService){}
    ngOnInit() {
      //console.log(this.activatedRoute.snapshot.params['id']);}
      this.currentjoueur = this.produitService.consulterJoueur(this.activatedRoute.snapshot. params['id']);
      console.log(this.currentjoueur);
    }
    updateProduit()
{ //console.log(this.currentProduit);
  this.produitService.updatejoueur(this.currentjoueur);
}

}
