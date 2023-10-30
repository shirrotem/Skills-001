export interface PokemonResponse {
    abilities: Array<{ ability: any, is_hidden: boolean, slot: number }>;
    base_experience: number;
    forms: Array<{ name: string, url: string }>;
    game_indices: any[]; 
    height: number;
    held_items: any[]; 
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Array<{ move: any, version_group_details: any[] }>;
    name: string;
    order: number;
    past_abilities: any[]; 
    past_types: any[]; 
    species: { name: string, url: string };
    sprites: {
      back_default: string;
      back_female: string | null;
      back_shiny: string;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
      other: {
        dream_world: any;
        home: any;
        'official-artwork': any;
      };
      versions: any; 
    };
    stats: Array<{ base_stat: number, effort: number, stat: any }>;
    types: Array<{ slot: number, type: any }>;
    weight: number;
  }
  