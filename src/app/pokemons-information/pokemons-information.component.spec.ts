import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsInformationComponent } from './pokemons-information.component';

describe('PokemonsInformationComponent', () => {
  let component: PokemonsInformationComponent;
  let fixture: ComponentFixture<PokemonsInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsInformationComponent]
    });
    fixture = TestBed.createComponent(PokemonsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
