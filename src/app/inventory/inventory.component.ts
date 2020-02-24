import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

export class Item {
  constructor(
    public itemNo: number,
    public name: string,
    public amount: number,
    public inventoryCode: number
  ){

  }
}
  
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
 
  changeItemAmount: Item
  stock = [
    
  ]

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(){
    this.refreshStock();
  }

  refreshStock(){
    this.dataService.getStock().subscribe(
      response=>{
        console.log(response);
        this.stock=response;
      }
    )
  }

  deleteItem(itemNo){
    console.log(`delete item ${itemNo}`)
    this.dataService.deleteItem(itemNo).subscribe(
      response=>{
        console.log(response);
        //this.message=`Delete of Item ${itemNo} Successful!`;
        this.refreshStock();
      }
    )
  }

  updateItem(itemNo){
    console.log(`update ${itemNo}`);
    this.router.navigate(['stock',itemNo]);
  }

  addItem(){
    console.log();
    this.router.navigate(['stock',-1])
  }

  increaseItem(itemNo){
    this.dataService.increaseItem(itemNo).subscribe(
      response=>{
        console.log(response);
        this.refreshStock();
      }
    )
  }

  decreaseItem(itemNo){
    this.dataService.decreaseItem(itemNo).subscribe(
      response=>{
        console.log(response);
        this.refreshStock();
      }
    )
  }
}
