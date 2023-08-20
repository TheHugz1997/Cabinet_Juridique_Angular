import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeavocatsComponent } from './listeavocats/listeavocats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DomainesComponent } from './domaines/domaines.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DetailAvocatComponent } from './detail-avocat/detail-avocat.component';
import { LiensComponent } from './liens/liens.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { CreationAvocatComponent } from './creation-avocat/creation-avocat.component';
import { CreationDomaineComponent } from './creation-domaine/creation-domaine.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ListeavocatsComponent,
    NavbarComponent,
    DomainesComponent,
    LoginComponent,
    RegisterComponent,
    DetailAvocatComponent,
    LiensComponent,
    RendezvousComponent,
    CreationAvocatComponent,
    CreationDomaineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
