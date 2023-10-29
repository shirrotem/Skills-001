import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemons-information',
  templateUrl: './pokemons-information.component.html',
  styleUrls: ['./pokemons-information.component.scss']
})
export class PokemonsInformationComponent {
  @Input() pokemon?: Pokemon;

}
