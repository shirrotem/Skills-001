import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './project001/component/pokemons/pokemons.component';
import { PokemonsInformationComponent } from './project001/component/pokemons-information/pokemons-information.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './project001/component/login/login.component';
import { LogoutComponent } from './project001/component/logout/logout.component';
import { MyMapComponent } from './project002/component/my-map/my-map.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonsInformationComponent,
    LoginComponent,
    LogoutComponent,
    MyMapComponent,
    MainPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
