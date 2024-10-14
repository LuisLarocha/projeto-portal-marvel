import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonagensComponent } from './pages/personagens/personagens.component';
import { QuadrinhosComponent } from './pages/quadrinhos/quadrinhos.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { CriadoresComponent } from './pages/criadores/criadores.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'personagens', component: PersonagensComponent},
  {path: 'quadrinhos', component: QuadrinhosComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'criadores', component: CriadoresComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
