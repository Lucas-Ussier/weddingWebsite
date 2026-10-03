import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Cabecalho, Links } from './components/cabecalho/cabecalho';
import { ContagemRegressiva } from './components/contagem-regressiva/contagem-regressiva';
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
    NgOptimizedImage,
    ConfirmarPresenca,
    Galeria,
    Mural,
    Presentes,
    Padrinhos,
    Playlist,
    Adm,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly Links = Links;
  readonly activeLink = signal(Links.HOME);

  onLinkClick(link: Links): void {
    this.activeLink.set(link);
  }
}
