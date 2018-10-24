import { Component, OnInit } from '@angular/core';

import { Item } from '../../Item';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

    name: string;
    quantity?: number;
    price?: number;
    description?: string;

    isNew = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.selectedItem.subscribe(item => {
      if(item.name !==null){
        this.isNew = false;
        this.name = item.name;
        this.quantity = item.quantity;
        this.price = item.price;
        this.description = item.description;

      }
    });
  }
onSubmit(){
  if(this.isNew){
    const NewItem = {
      name: this.name,
      quantity: this.quantity,
      price: this.price,
      description: this.description

    }
    this.dataService.additem(NewItem);
  }
  else{
    const upItem ={
      name: this.name,
      quantity: this.quantity,
      price: this.price,
      description: this.description
    }
    this.dataService.updateItem(upItem);
  }
}
}
