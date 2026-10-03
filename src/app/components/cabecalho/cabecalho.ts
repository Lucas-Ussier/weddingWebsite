import { Component, EventEmitter, Output } from '@angular/core';
import { Links } from '../../model/links.enum';

@Component({
  selector: 'app-cabecalho',
  imports: [],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {
  constructor() {}

  readonly Links = Links;
  @Output() linkClicked: EventEmitter<Links> = new EventEmitter();
  activeLink: Links = Links.HOME;


  onLinkClick(link: Links): void {
    //console.log(`Link clicado: ${link}`);
    this.activeLink = link;
    this.linkClicked.emit(link);
  }
}

export { Links };
