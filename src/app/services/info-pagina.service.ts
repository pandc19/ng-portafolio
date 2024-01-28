import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/infor-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {

    // console.log('Servicio de inforPagina listo');

    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe(resp => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
      });
  }
}
