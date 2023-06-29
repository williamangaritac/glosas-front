import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListaGlosasComponent } from './lista-glosas/lista-glosas.component';
import { RegistrarGlosaComponent } from './registrar-glosa/registrar-glosa.component';
import { ActualizarGlosaComponent} from './actualizar-glosa/actualizar-glosa.component';
import { GlosaDetallesComponent } from './glosa-detalles/glosa-detalles.component';




@NgModule({
  declarations: [
    AppComponent,
    ListaGlosasComponent,
    RegistrarGlosaComponent,
    ActualizarGlosaComponent,
    GlosaDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
export class ListaGlosasModule { }
