import { Component, OnInit } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';

@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
})
export class FoodListComponent implements OnInit {

  constructor( public nutricowService: NutricowService ) {}

  ngOnInit(): void {
    this.nutricowService.loadLocalStorage(); // Llama a loadLocalStorage al iniciar el componente
  }

}
