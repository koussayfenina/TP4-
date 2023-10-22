import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueursComponent } from './add-joueurs/add-joueurs.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';

const routes: Routes = [
  {path: "joueurs", component : JoueursComponent},
  {path:"add-joueurs",component:AddJoueursComponent},
  {path: "updatejoueur/:id", component: UpdateJoueurComponent}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
