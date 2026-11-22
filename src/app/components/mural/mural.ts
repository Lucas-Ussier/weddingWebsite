import { NgOptimizedImage, NgForOf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Card } from './card/card';

@Component({
  selector: 'app-mural',
  imports: [NgOptimizedImage, Card, NgForOf],
  templateUrl: './mural.html',
  styleUrl: './mural.css',
})
export class Mural implements OnInit {
  protected readonly messageCharacterCount = signal(0);

  protected cards: { name: string, message: string }[] = [];

  ngOnInit() { 

  }

  onClickButton() {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const messageInput = document.getElementById('fieldTextarea') as HTMLTextAreaElement;

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
      this.cards.push({ name, message });
      nameInput.value = '';
      messageInput.value = '';
      this.messageCharacterCount.set(0);
    }
  }
  
}
