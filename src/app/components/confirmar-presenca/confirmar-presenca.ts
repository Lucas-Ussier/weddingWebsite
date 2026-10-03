import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmar-presenca',
  imports: [FormsModule],
  templateUrl: './confirmar-presenca.html',
  styleUrl: './confirmar-presenca.css',
})
export class ConfirmarPresenca {
  textName: string = '';

  searchName(){
    console.log(`Procurando por: ${this.textName}`);
  }
}
