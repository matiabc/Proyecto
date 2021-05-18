import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNotaComponent } from './lista-nota/lista-nota.component';
import {VerNotaComponent} from './ver-nota/ver-nota.component'

const routes: Routes = [
  {path: 'listanota', component: ListaNotaComponent},
  {path: 'vernota', component: VerNotaComponent},
  {path: '', component: VerNotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
