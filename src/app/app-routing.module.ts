import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaGlosasComponent } from './lista-glosas/lista-glosas.component';
import { RegistrarGlosaComponent } from './registrar-glosa/registrar-glosa.component';
import { ActualizarGlosaComponent} from './actualizar-glosa/actualizar-glosa.component';
import { GlosaDetallesComponent} from './glosa-detalles/glosa-detalles.component'

const routes: Routes = [
  {path : 'glosas', component: ListaGlosasComponent},
  {path : '',redirectTo: 'glosas', pathMatch:'full'},
  {path : 'registrar-glosa', component: RegistrarGlosaComponent},
  {path : 'actualizar-glosa/:id', component: ActualizarGlosaComponent},
  {path : 'glosa-detalles/:id', component: GlosaDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
