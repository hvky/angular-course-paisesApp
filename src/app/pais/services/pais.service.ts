import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  buscarPais( pais: string ): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${ pais }`;

    return this.http.get< Country[] >( url );
  }

  buscarPorCapital( capital: string ): Observable<Country[]> {
    const url: string = `${ this.apiUrl }/capital/${ capital }`;

    return this.http.get< Country[] >( url );
  }

  getPaisPorAlpha( id: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get< Country >( url );
  }

  buscarPorRegion( region: string ): Observable<Country[]> {
    const url: string = `${ this.apiUrl }/region/${ region }`;

    return this.http.get< Country[] >( url );
  }
}
