import { Injectable } from '@angular/core';
import { joueur } from '../modele/joueur.modele';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  joueurs : joueur []; //un tableau de joueurs
  j !:joueur;
  constructor() { 
    this.joueurs = [
      {idjoueur : 1, nomjoueur : "messi52", prixjoueur : 3000.600, equipejoueur :"barcalona"},
      {idjoueur : 2, nomjoueur : "ronaldo", prixjoueur : 450, equipejoueur:"real madrid"},
      {idjoueur : 3, nomjoueur :"rashford", prixjoueur : 900.123, equipejoueur:"man united"}
       ];
  }
  listeJoueur():joueur []
  {
    return this.joueurs;
  }
  ajouterjoueurs(j :joueur)
  {
    this.joueurs.push(j);

  }
  supprimerJoueur( j: joueur){
    //supprimer le produit prod du tableau produits
    const index = this.joueurs.indexOf(j, 0);
    if (index > -1) {
    this.joueurs.splice(index, 1);
    }
    }
    consulterJoueur(id:number): joueur{
      return this.joueurs.find(p => p.idjoueur == id)!;
      }
      trierjoueur(){
        this.joueurs = this.joueurs.sort((n1,n2) => {
        if (n1.idjoueur! > n2.idjoueur!) {
        return 1;
        }
        if (n1.idjoueur! < n2.idjoueur!) {
        return -1;
        }
        return 0;
        });
        }
    updatejoueur(p : joueur)
    {
      //console.log(this.currentjoueur);
      this.supprimerJoueur(p);
      this.ajouterjoueurs(p);
      this.trierjoueur();

    }
    
      
}
