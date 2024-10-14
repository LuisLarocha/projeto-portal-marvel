import { Component, OnInit } from '@angular/core';
import { EventosAPIService } from '../../services/eventos-api.service';
import { Eventos } from '../../entities/eventos';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent implements OnInit {
  loadResult: boolean = false;
  todosEventos: Eventos[] = [];
  eventoEncontrado: Eventos| null = null;
  exibirEventoDaBusca: boolean = false;
  nomeEvento: string = '';

  constructor(private eventosService: EventosAPIService)
  {}

  ngOnInit(): void {
    this.obterTodosEventos();
  }

  obterTodosEventos(): void {
    this.loadResult = true;
    this.exibirEventoDaBusca = false;
    this.eventosService.obterEventos().subscribe((result)=>{
      this.todosEventos = result.data.results;
      this.loadResult = false;
    })
  }

  obterEventoPeloNome(event: KeyboardEvent | null, nome: string) {
    let tecla: string | null = null;

    if (event) {
        tecla = event.key; 
    }

    if (tecla !== 'Enter' && tecla !== 'Delete' && tecla !== 'Backspace' && event !== null) {
      return; 
    }

    this.loadResult = true;
    this.nomeEvento = nome;
    this.eventosService.obterEventoPorNome(this.nomeEvento).subscribe((result) =>
    {
      if(result.data.count > 0) {
        this.exibirEventoDaBusca = true;
        this.eventoEncontrado = result.data.results[0];
        this.loadResult = false;
      }
      else {
        this.obterTodosEventos();
      }
    })
  }

}
