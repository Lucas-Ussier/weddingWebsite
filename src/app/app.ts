import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho, Links } from './components/cabecalho/cabecalho';
import { ContagemRegressiva } from './components/contagem-regressiva/contagem-regressiva';
import { CommonModule } from '@angular/common';
import { ConfirmarPresenca } from './components/confirmar-presenca/confirmar-presenca';
import { Adm } from './components/adm/adm';
import { Galeria } from './components/galeria/galeria';
import { Mural } from './components/mural/mural';
import { Padrinhos } from './components/padrinhos/padrinhos';
import { Playlist } from './components/playlist/playlist';
import { Presentes } from './components/presentes/presentes';

@Component({
  selector: 'app-root',
  imports: [
    Cabecalho,
    ContagemRegressiva,
    CommonModule,
    ConfirmarPresenca,
    Galeria,
    Mural,
    Presentes,
    Padrinhos,
    Playlist,
    Adm,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  activeLink = 'home';

  onLinkClick(link: Links): void {
    console.log(`Link clicado no componente pai: ${link}`);
    this.activeLink = link;
  }
}
