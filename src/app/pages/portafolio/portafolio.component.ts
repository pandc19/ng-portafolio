import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  constructor(private productosService: ProductosService) { }

  get productos() {
    return this.productosService.productos;
  }

  get cargando() {
    return this.productosService.cargando;
  }

}
