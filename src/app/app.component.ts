import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Aplicativo Registro Glosas';

  // Aumentar el tamaño de fuente y cambiar el estilo
  getCustomStyle(): object {
    return {
      'font-size': '120px',
      'font-weight': '750',
      'font-family': 'Arial, sans-serif',
      'margin-left': '600px' // Ajusta el valor según tus necesidades
    };
  }
}
