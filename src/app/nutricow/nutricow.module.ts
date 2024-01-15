import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FoodListComponent,
  ],
  imports: [ CommonModule ],
  exports: [
    HeaderComponent,
    FoodListComponent,
    NavbarComponent
  ],
})
export class NutricowModule {}
