import { Component, OnInit } from '@angular/core';

//Configurez le nouveau composant d'alertes de produit pour recevoir un produit en entrée:
import { Input} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  //define a property named product with an @Input() decorator. The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
  @Input() product;

  
  constructor() { }

  ngOnInit() {
  }

}