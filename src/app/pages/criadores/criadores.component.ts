import { Component, OnInit } from '@angular/core';
import { CriadoresAPIService } from '../../services/criadores-api.service';

@Component({
  selector: 'app-criadores',
  templateUrl: './criadores.component.html',
  styleUrl: './criadores.component.css'
})
export class CriadoresComponent implements OnInit {
  todosCriadores: any = [];
  criadorEncontrado: any = [];
  loadResult: boolean = false;
  exibirCriadorDaBusca: boolean = false;
  nomeCriador: string = '';
  
  constructor(private criadoresService: CriadoresAPIService)
  {}

  ngOnInit(): void {
    this.obterTodosCriadores();
  }

  obterTodosCriadores(): void {
    this.loadResult = true;
    this.exibirCriadorDaBusca = false;
    this.criadoresService.obterCriadores().subscribe((result)=>{
      this.todosCriadores = result.data.results;
      console.log(this.todosCriadores)
      this.loadResult = false;
    })
  }

}
