import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private infoPaginaService: InfoPaginaService,
    private router: Router,
  ) { }

  public get info() {
    return this.infoPaginaService.info;
  }

  buscarProducto(termino: string) {
    // console.log(termino);

    if (termino.length < 1) return;

    this.router.navigate(['/search', termino]);
  }


}
