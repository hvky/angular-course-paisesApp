import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino    : string = '';
  statusError: boolean = false;
  paises     : Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ): void {
    this.termino = termino;

    if( this.termino.trim().length === 0 ) return
    this.statusError = false;

    this.paisService.buscarPais( this.termino )
      .subscribe( ( paises ) => this.paises = paises,
                  ( err ) => {
        this.statusError = true
        this.paises = [];
      });
  }

  sugerencias( termino: string ): void {
    this.statusError = false;
    // Sugerencias
  }
}
