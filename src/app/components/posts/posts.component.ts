import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  items: Item[];
  isChecked: boolean;

  name: string;
  quantity?: number;
  price?: number;
  description?: string;

  isNew = true;

  constructor(private dataService: DataService) {
    
   }

   changeStyle(item){
     
     this.isChecked = this.isChecked == true ? false :true;
    
   }

  ngOnInit() {
     this.dataService.geItems().subscribe(items =>{
       this.items = items;
       this.isChecked = true;
     });

  }
  
onSelect(item: Item){
  this.dataService.setFromItem(item);

}



onDelete(item: Item){
  if(confirm('are you sure?')){
    this.dataService.deleteItem(item);
  }
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
