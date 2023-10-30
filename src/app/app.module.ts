import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './component/pokemons/pokemons.component';
import { PokemonsInformationComponent } from './component/pokemons-information/pokemons-information.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonsInformationComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
