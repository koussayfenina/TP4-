import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueursComponent } from './add-joueurs/add-joueurs.component';
import { FormsModule } from '@angular/forms';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';

@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    AddJoueursComponent,
    UpdateJoueurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
