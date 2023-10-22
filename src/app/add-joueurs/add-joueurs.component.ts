import { Component, OnInit } from '@angular/core';
import { joueur } from '../modele/joueur.modele';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-add-joueurs',
  templateUrl: './add-joueurs.component.html',
  styleUrls: ['./add-joueurs.component.css']
})
export class AddJoueursComponent {
  newjoueur= new joueur();
  message = '';
  constructor(private joueurservice:JoueurService){}

  addJoueur(){
    //console.log(this.newjoueur);
    this.joueurservice.ajouterjoueurs(this.newjoueur);
    this.message="joueur "+this.newjoueur.nomjoueur+" ajouté avec succeés";
  }

}
