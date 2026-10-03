import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { timer } from 'rxjs/internal/observable/timer';
import { Subscription } from 'rxjs/internal/Subscription';

interface TempoDetalhado {
  meses: string;
  dias: string;
  horas: string;
  minutos: string;
  segundos: string;
}

@Component({
  selector: 'app-contagem-regressiva',
  imports: [],
  templateUrl: './contagem-regressiva.html',
  styleUrl: './contagem-regressiva.css',
})
export class ContagemRegressiva implements OnInit {
  date = new Date(2027, 9, 2, 11);
  tempo: TempoDetalhado = {
    meses: '00',
    dias: '00',
    horas: '00',
    minutos: '00',
    segundos: '00',
  };
  contagemEncerrada = false;
  private timerSubscription!: Subscription;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Executa imediatamente a primeira vez
    this.atualizarContagem();

    // Configura o intervalo reativo para rodar estritamente a cada 1 segundo (1000ms)
    this.timerSubscription = interval(1000).subscribe(() => {
      this.atualizarContagem();
    });
  }

  atualizarContagem(): void {
    const agora = new Date().getTime();
    const diferenca = this.date.getTime() - agora;

    if (diferenca <= 0) {
      this.contagemEncerrada = true;
      this.tempo = {
        meses: '00',
        dias: '00',
        horas: '00',
        minutos: '00',
        segundos: '00',
      };
      if (this.timerSubscription) this.timerSubscription.unsubscribe();
      return;
    }

    // Conversões matemáticas diretas com base no tempo total restante
    const segundosTotais = Math.floor(diferenca / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    // Cálculos considerando médias astronômicas comerciais (1 ano = 365 dias, 1 mês = 30.436 dias)
    const anos = Math.floor(diasTotais / 365);
    const meses = Math.floor((diasTotais % 365) / 30.436);
    const dias = Math.floor((diasTotais % 365) % 30.436);

    const horas = horasTotais % 24;
    const minutos = minutosTotais % 60;
    const segundos = segundosTotais % 60;

    // Atualiza o objeto da interface forçando o Angular a renderizar
    this.tempo = {
      meses: meses.toString().padStart(2, '0'),
      dias: dias.toString().padStart(2, '0'),
      horas: horas.toString().padStart(2, '0'),
      minutos: minutos.toString().padStart(2, '0'),
      segundos: segundos.toString().padStart(2, '0'),
    };

    this.cdr.detectChanges(); 
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
