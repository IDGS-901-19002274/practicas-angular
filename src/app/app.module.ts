import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciasComponent } from './distancias/distancias.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { DistModule } from './distancias/dist/dist.module';
import { RestModule } from './resistencias/rest/rest.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DistModule,
    BrowserModule,
    DistModule,
    RestModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
