import { Component, OnInit } from '@angular/core';
import { Item } from '../inventory/inventory.component';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemNo:number
  item:Item
  
  constructor(
    private dataService:DataService, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.itemNo=this.route.snapshot.params['itemNo'];
    this.item=new Item(this.itemNo,'',null,null);

    if(this.itemNo!=-1){
      this.dataService.getItem(this.itemNo).subscribe(
        data=>this.item=data
      )
    }
  }
 
  saveItem(){
    if(this.itemNo===-1){
      this.dataService.addItem(this.item).subscribe(
        data=>{
          console.log(data)
          this.router.navigate(['stock'])
        }
      )
    }else{
      this.dataService.updateItem(this.itemNo,this.item).subscribe(
        data=>{
          console.log(data)
          this.router.navigate(['stock'])
        }
      )
    }
  }
}
