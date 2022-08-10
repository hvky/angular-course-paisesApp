import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  @Input() placeholder: string = '';

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  termino: string = ''
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
      .pipe( debounceTime(300) )
      .subscribe( valor => this.onDebounce.emit( valor ) );
  }

  buscar(): void {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(): void {

    this.debouncer.next( this.termino );

  }

}
