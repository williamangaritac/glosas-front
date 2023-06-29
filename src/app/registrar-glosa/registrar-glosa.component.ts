import { Component, OnInit } from '@angular/core';
import { Glosa } from '../glosas';
import { GlosaServiceService } from '../glosa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-glosa',
  templateUrl: './registrar-glosa.component.html',
  styleUrls: ['./registrar-glosa.component.css']
})

// esta es la clase que se define en el ts para todo el componente de -->RegistrarGlosaComponent
export class RegistrarGlosaComponent implements OnInit {

  // Se define una nueva instancia de Glosas
  glosa : Glosa = new Glosa();

  constructor(private glosaServicio:GlosaServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarGlosa(){
    this.glosaServicio.registrarGlosa(this.glosa). subscribe(dato => {
      console.log(dato);
      this.irALaListaDeGlosas();
    }, error => console.log(error));
  }

  irALaListaDeGlosas(){
    this.router.navigate(['/glosas'])
  }

  onSubmit(){
    this.guardarGlosa();
  }

}
