import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private router: Router){}

  PokemonProject() :void{
    this.router.navigate(['/login']);
  }

  MyMapProject(): void{
    this.router.navigate(['/map']);

  }




}
