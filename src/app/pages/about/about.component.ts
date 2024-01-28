import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private infoPaginaService: InfoPaginaService) { }

  get equipo() {
    return this.infoPaginaService.equipo;
  }

}
