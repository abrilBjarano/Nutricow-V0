import { Component } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';

@Component({
  selector: 'app-footer',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor( public nutricowService: NutricowService) {}
}
