import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNotaComponent } from './lista-nota/lista-nota.component';
import { VerNotaComponent } from './ver-nota/ver-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNotaComponent,
    VerNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
