import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-nossa-historia',
  imports: [NgOptimizedImage],
  templateUrl: './nossa-historia.html',
  styleUrl: './nossa-historia.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NossaHistoria {}
