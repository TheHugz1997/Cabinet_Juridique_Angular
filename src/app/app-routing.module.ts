import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeavocatsComponent } from './listeavocats/listeavocats.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  { path: 'listeavocats', component: ListeavocatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
