import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Links } from '../../model/links.enum';

@Component({
  selector: 'app-cabecalho',
  imports: [NgOptimizedImage],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cabecalho {
  readonly Links = Links;
  readonly linkClicked = output<Links>();
  readonly activeLink = signal(Links.HOME);
  readonly menuExpanded = signal(false);

  toggleMenu(): void {
    this.menuExpanded.update((expanded) => !expanded);
  }

  onLinkClick(link: Links): void {
    this.activeLink.set(link);
    this.menuExpanded.set(false);
    this.linkClicked.emit(link);
  }
}

export { Links };
