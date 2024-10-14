import { Component, OnInit } from '@angular/core';
import { QuadrinhosAPIService } from '../../services/quadrinhos-api.services';
import { Quadrinhos } from '../../entities/quadrinhos';

@Component({
  selector: 'app-quadrinhos',
  templateUrl: './quadrinhos.component.html',
  styleUrls: ['./quadrinhos.component.css']
})
export class QuadrinhosComponent implements OnInit {
  loadResult: boolean = false;
  todosQuadrinhos: Quadrinhos[] = [];
  quadrinhoEncontrado: Quadrinhos[] = [];
  exibirQuadrinhoDaBusca: boolean = false;
  tituloQuadrinho: string = '';

  constructor(private quadrinhosService: QuadrinhosAPIService) {}

  ngOnInit(): void {
    this.obterTodosQuadrinhos();
  }

  obterTodosQuadrinhos(): void {
    this.loadResult = true;
    this.exibirQuadrinhoDaBusca = false;

    this.quadrinhosService.obterQuadrinhos().subscribe(
      (result) => {
        this.todosQuadrinhos = result.data.results;
        this.loadResult = false;
      },
      (error) => {
        console.error('Error fetching comics:', error);
        this.loadResult = false;
      }
    );
  }

}
