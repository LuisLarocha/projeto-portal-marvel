import { Component, OnInit } from '@angular/core';
import { QuadrinhosAPIService } from '../../services/quadrinhos-api.services';

@Component({
  selector: 'app-quadrinhos',
  templateUrl: './quadrinhos.component.html',
  styleUrl: './quadrinhos.component.css'
})
export class QuadrinhosComponent implements OnInit {
  loadResult: boolean = false;
  todosQuadrinhos: any = [];
  quadrinhoEncontrado: any = [];
  exibirQuadrinhoDaBusca: boolean = false;
  tituloQuadrinho: string = '';

  constructor(private quadrinhosService: QuadrinhosAPIService)
  {}

  ngOnInit(): void {
    this.obterTodosQuadrinhos();
  }

  obterTodosQuadrinhos (): void {
    this.loadResult = true;
    this.exibirQuadrinhoDaBusca = false;
    this.quadrinhosService.obterQuadrinhos().subscribe((result) => 
    {
      this.todosQuadrinhos = result.data.results;
      this.loadResult = false;
    })
  }
}