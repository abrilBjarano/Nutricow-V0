import { Component, OnInit } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
})
export class FoodListComponent implements OnInit {

  items!: Item[]; // Declara una propiedad para almacenar los ítems

  constructor(public nutricowService: NutricowService) {}

  ngOnInit(): void {
    this.loadItemsFromLocalStorage(); // Llama al método para cargar los ítems desde el almacenamiento local
  }

  loadItemsFromLocalStorage(): void {
    this.nutricowService.loadLocalStorage(); // Carga los ítems desde el almacenamiento local
    this.items = this.nutricowService.getItems(); // Obtiene la lista de ítems actualizada
  }

}
