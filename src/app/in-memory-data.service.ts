import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Aminadabou' },
      { id: 13, name: 'Pablo' },
      { id: 14, name: 'Christine' },
      { id: 15, name: 'Nakuze' },
      { id: 16, name: 'Anitha' },
      { id: 17, name: 'Divine' },
      { id: 18, name: 'Ngatoya' },
      { id: 19, name: 'Kongo' },
      { id: 20, name: 'Sylvain' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}