import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent {
  termino         : string = '';
  statusError     : boolean = false;
  paises          : Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugerencia: boolean = false;

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ): void {
    this.mostrarSugerencia = false
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
    this.mostrarSugerencia = true;
    this.statusError = false;
    this.termino = termino;

    // if(termino.trim().length === 0) return;
    this.paisService.buscarPais(termino)
      .subscribe( (paises) => this.paisesSugeridos = paises.splice(0,5),
                  (err) => this.paisesSugeridos = []
       );
  }

  buscarSugerido( termino: string ): void {
    this.buscar( termino );
  }
}
