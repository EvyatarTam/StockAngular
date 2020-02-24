import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemComponent } from './item/item.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: InventoryComponent},
  { path: 'stock', component: InventoryComponent},
  { path: 'stock/:itemNo', component: ItemComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
