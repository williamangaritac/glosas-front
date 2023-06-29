
import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Glosa } from './../glosas';
import { GlosaServiceService } from './../glosa-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-glosa',
  templateUrl: './actualizar-glosa.component.html',
  styleUrls: ['./actualizar-glosa.component.css']
})
export class ActualizarGlosaComponent implements OnInit {

  id: number;
  glosa:Glosa = new Glosa();

  constructor(private glosaServicio: GlosaServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.glosaServicio.obtenerGlosaPorId(this.id).subscribe(dato =>{
      this.glosa = dato;
    },error => console.log(error))
  }

  irALalistaDeGlosas(){
    this.router.navigate(['/glosas'])
    swal('Glosa actualizada', `La Glosa ${this.glosa.entidad} ha sido actualizado con exito`,`success` )
  }

  onSubmit(){
    this.glosaServicio.actualizarGlosa(this.id,this.glosa).subscribe(dato => {
      this.irALalistaDeGlosas();
    },error => console.log(error));
  }

}
