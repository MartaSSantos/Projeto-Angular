import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './../pensamento';
@Component({
  selector: 'app-pensamentoo',
  templateUrl: './pensamentoo.component.html',
  styleUrls: ['./pensamentoo.component.css']
})
export class PensamentooComponent implements OnInit {
  @Input() pensamentoo: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Marta',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {

  }

  larguraPensamento(): string {
    if (this.pensamentoo.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
