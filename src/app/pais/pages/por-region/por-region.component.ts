import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 16px;
  }
  `]
})
export class PorRegionComponent {

  regiones    : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises      : Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClassCss( region: string): string {
    return (this.regionActiva === region)
              ? 'btn-primary'
              : 'btn-outline-primary';
  }

  activarRegion( region: string ): void {
    if (region === this.regionActiva) return;

    this.regionActiva = region;

    this.paisService.buscarPorRegion( region )
      .subscribe( paises => this.paises = paises );
  }
}
