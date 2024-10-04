import { Component, OnInit } from '@angular/core';
import { PersonagensAPIService } from '../../services/personagens-api.service';
import { QuadrinhosAPIService } from '../../services/quadrinhos-api.services';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrl: './personagens.component.css'
})
export class PersonagensComponent implements OnInit {
  loadResult: boolean = false;
  todosPersonagens: any = [];
  personagemEncontrado: any = [];
  todosQuadrinhos: any = [];
  nomePersonagem: string = '';
  exibirQuadrinhos: boolean = false;
  exibirPersonagemDaBusca: boolean = false;

  constructor(
    private personagenService: PersonagensAPIService,
    private quadrinhoService: QuadrinhosAPIService
  )
  {}

  ngOnInit(): void {
    this.obterTodosPersonagens();
  }

  obterTodosPersonagens(): void {
    this.loadResult = true;
    this.exibirPersonagemDaBusca = false;
    this.personagenService.obterTodosPersonagens().subscribe((result)=>{
      this.todosPersonagens = result.data.results;
      this.loadResult = false;
    })
  }

  obterPersonagemPeloNome(event: KeyboardEvent | null, nome: string) {
    let tecla: string | null = null;

    if (event) {
        tecla = event.key; 
    }

    if (tecla !== 'Enter' && tecla !== 'Delete' && tecla !== 'Backspace' && event !== null) {
      return; 
    }

    this.personagenService.obterPersonagemPeloNome(nome).subscribe((result) =>
    {
      if(result.data.count > 0)
      {
        this.exibirPersonagemDaBusca = true;
        this.personagemEncontrado = result.data.results;
        this.loadResult = false;
      }
      else{
        this.obterTodosPersonagens();
      }
    })
  }


  buscarQuadrinhosPorPersonagem(personagem: any)
  {
    this.loadResult = true;
    this.nomePersonagem = personagem.name;
    this.quadrinhoService.obterQuadrinhosPorPersonagem(personagem.id).subscribe((result)=>
    {
      if(result.data.count > 0)
      {
        this.todosQuadrinhos = result.data.results;
        this.exibirQuadrinhos = true;
        this.loadResult= false;
      } 
      else {
        this.loadResult= false;
        alert("O personagem não possui quadrinhos")
      }
    })
  }

  fecharModal(): void {
    this.exibirQuadrinhos = !this.exibirQuadrinhos;
  }

}
