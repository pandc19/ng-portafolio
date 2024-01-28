import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();


  }

  private cargarInfo() {
    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe(resp => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
      });
  }

  private cargarEquipo() {
    this.http.get<any[]>('https://angular-html-33299-default-rtdb.firebaseio.com/equipo.json')
      .subscribe(resp => {
        this.equipo = resp;
        // console.log(resp);
      });
  }
}
