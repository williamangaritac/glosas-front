import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Glosa } from '../glosas';
import { GlosaServiceService } from '../glosa-service.service';




@Component({
  selector: 'app-glosa-detalles',
  templateUrl: './glosa-detalles.component.html',
  styleUrls: ['./glosa-detalles.component.css']
})
export class GlosaDetallesComponent implements OnInit {

  id:number;
  glosa:Glosa;

  constructor(private route: ActivatedRoute, private glosaServicio : GlosaServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.glosa = new Glosa();
    this.glosaServicio.obtenerGlosaPorId(this.id).subscribe(dato => {
      this.glosa = dato;
      swal(`Detalles de la glosa ${this.glosa.numerofactura}`);
    });
  }
}
