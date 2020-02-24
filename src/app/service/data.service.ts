import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../inventory/inventory.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getStock(){
    return this.http.get<Item[]>(`http://localhost:8080/stock`);
  }

  getItem(itemNo){
    return this.http.get<Item>(`http://localhost:8080/stock/${itemNo}`);
  }

  deleteItem(itemNo){
    return this.http.delete(`http://localhost:8080/stock/${itemNo}`);
  }

  updateItem(itemNo,item){
    return this.http.put(`http://localhost:8080/stock/${itemNo}`,item);
  }

  addItem(item){
    return this.http.post(`http://localhost:8080/stock`,item);
  } 
  
  increaseItem(itemNo){
    return this.http.put(`http://localhost:8080/stock/increase/${itemNo}`,itemNo);
  }

  decreaseItem(itemNo){
    return this.http.put(`http://localhost:8080/stock/decrease/${itemNo}`,itemNo);
  }

}
