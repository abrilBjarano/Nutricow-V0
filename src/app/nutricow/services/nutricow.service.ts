import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class NutricowService {

  private items: Item[] = [{
    emoji: '🥛',
    counter: 0,
    upperLimit: 1
  },{
    emoji: '🍇',
    counter: 0,
    upperLimit: 3
  },{
    emoji: '🥦',
    counter: 0,
    upperLimit: 4
  },{
    emoji: '🎑',
    counter: 0,
    upperLimit: 6
  },{
    emoji: '🥩',
    counter: 0,
    upperLimit: 5
  },{
    emoji: '🥑',
    counter: 0,
    upperLimit: 2
  },{
    emoji: '🥜',
    counter: 0,
    upperLimit: 1
  },{
    emoji: '🚰',
    counter: 0,
    upperLimit: 5
  }];

  private saveLocalStorage(): void {

    const itemsJSON = JSON.stringify(this.items);
    localStorage.setItem('history', itemsJSON );
  }

  public loadLocalStorage(): void {
    const itemsJSON = localStorage.getItem('history');

    if (itemsJSON) {
      this.items = JSON.parse(itemsJSON);
    }
  }

  public getItems(): Item[] {
    return [...this.items];
  }

  substractQty(item: any) {
    if (item.counter > 0) {
      item.counter--;
      this.saveLocalStorage();
    }
  }

  addQty(item: any) {
    if (item.counter < item.upperLimit) {
      item.counter++;
      this.saveLocalStorage();
    }
  }

  reset(){
    this.items.forEach( item => {
      item.counter = 0;
      this.saveLocalStorage();
    })
  }

}
