import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeavocatsComponent } from './listeavocats/listeavocats.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DomainesComponent } from './domaines/domaines.component';
import { LoginComponent } from './login/login.component';
import { DetailAvocatComponent } from './detail-avocat/detail-avocat.component';
import { RegisterComponent } from './register/register.component';
import { LiensComponent } from './liens/liens.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent},
  { path: 'domaines', component: DomainesComponent},
  { path: 'listeavocats', component: ListeavocatsComponent},
  { path: 'listeavocats/:id_domaine', component: ListeavocatsComponent},
  { path: 'details-avocat/:id_avocat', component: DetailAvocatComponent},
  { path: 'connexion', component: LoginComponent},
  { path: 'inscription', component: RegisterComponent},
  { path: 'liens', component: LiensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
