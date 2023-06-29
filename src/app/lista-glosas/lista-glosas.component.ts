import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Glosa } from '../glosas';
import { GlosaServiceService } from '../glosa-service.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-lista-glosas',
  templateUrl: './lista-glosas.component.html',
  styleUrls: ['./lista-glosas.component.css']
})

//se define la clase ListaGlosasComponent del componente lista-glosas
export class ListaGlosasComponent implements OnInit {

  // Propiedades de paginación
  currentPage = 1;
  pageSize = 10; // Cantidad de elementos por página

  // instancia de la clase Glosas
  glosas: Glosa[];

  todasLasGlosas: Glosa[]; // Esto contendrá la lista completa de glosas

  terminoBusqueda = ''; // Nueva propiedad para el término de búsqueda

  constructor(private glosaServicio: GlosaServiceService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerGlosas();
    this.obtenerTodasLasGlosas();
  }

  actualizarGlosa(id:number){
    this.router.navigate(['actualizar-glosa', id]);
  }

   //metodo dentro de lista-glosas component que obtiene los datos de las glosas
  private obtenerGlosas(){
    this.glosaServicio.obtenerListaGlosas().subscribe(dato => {
        this.glosas = dato;
    });
  }

  eliminarGlosa(id: number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la glosa",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.glosaServicio.eliminarGlosa(id).subscribe(dato => {
          console.log(dato);
          this.obtenerGlosas();
          swal(
            'Glosa eliminado',
            'la Glosa ha sido eliminado con exito',
            'success'
          )
        });
      }
    })
}

  verDetallesGlosa(id:number){
  this.router.navigate(['glosa-detalles',id]);
  }

  private obtenerTodasLasGlosas() {
    this.glosaServicio.obtenerListaGlosas().subscribe(dato => {
      this.todasLasGlosas = dato;
      this.glosas = dato;
    });
  }

  buscarGlosas() {
    if (this.terminoBusqueda) {
      this.glosas = this.todasLasGlosas.filter(glosa =>
        (glosa.numerofactura ? glosa.numerofactura.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) : false) ||
        (glosa.entidad ? glosa.entidad.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) : false) ||
        (glosa.valortotalfactura ? glosa.valortotalfactura.toString().includes(this.terminoBusqueda.toLowerCase()) : false)
      );
    } else {
      this.glosas = this.todasLasGlosas;
    }
  }
}



