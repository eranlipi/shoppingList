import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Observable , of } from 'rxjs';


import {Item} from '../Item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Item[];

  private itemSource = new BehaviorSubject<Item>({
    name: null, quantity: null , price: null , description: null 
  });

  selectedItem = this.itemSource.asObservable();

  constructor() {
    this.items = [
      {name: 'milk', quantity: 1 , price: 5  ,isChecked:true},
      {name: 'cornflex', quantity: 2 , price: 30 ,isChecked:true},
      {name: 'coffee', quantity: 1 , price: 20 ,isChecked:true},

    ];
   }

  geItems(): Observable<Item[]>{
    return of(this.items);
  }
  additem(items: Item){
    this.items.unshift(items);
  }
  updateItem(items: Item){
    this.items.forEach((cur, index) => {
      if(items.name == cur.name){
        this.items.splice(index,1);
      }
    });
    this.items.unshift(items);
  }

  setFromItem(item: Item){
    this.itemSource.next(item);
  }
  deleteItem(items: Item){
    this.items.forEach((cur, index) => {
      if(items.name == cur.name){
        this.items.splice(index,1);
      }
    });
    
  }

}
