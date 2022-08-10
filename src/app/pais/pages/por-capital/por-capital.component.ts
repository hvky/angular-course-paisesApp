import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  termino    : string = '';
  statusError: boolean = false;
  paises     : Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ): void {
    this.termino = termino;

    if( this.termino.trim().length === 0 ) return
    this.statusError = false;

    this.paisService.buscarPorCapital( this.termino )
      .subscribe( ( paises ) => this.paises = paises,
                  ( err ) => {
        this.statusError = true
        this.paises = [];
      });
  }
}
