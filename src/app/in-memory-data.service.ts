import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '11Mr. djfs' },
      { id: 12, name: '12Linh' },
      { id: 13, name: '13Tung2222' },
      { id: 14, name: '14hfghfleritas' },
      { id: 15, name: '15gsd' },
      { id: 16, name: '16RubbegsdgrMan' },
      { id: 17, name: '17dggs' },
      { id: 18, name: '18Dr gfg' },
      { id: 19, name: '19ytyuty' },
      { id: 20, name: '20Tung' }
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