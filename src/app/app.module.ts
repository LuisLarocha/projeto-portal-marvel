import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BodyComponent } from './pages/body/body.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { PersonagensComponent } from './pages/personagens/personagens.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { CriadoresComponent } from './pages/criadores/criadores.component';
import { QuadrinhosComponent } from './pages/quadrinhos/quadrinhos.component';
import { HomeComponent } from './pages/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { LoadingComponent } from './services/loading/loading';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    PersonagensComponent,
    EventosComponent,
    CriadoresComponent,
    QuadrinhosComponent,
    HomeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule 
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
