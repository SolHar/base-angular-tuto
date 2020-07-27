import { Component, OnInit } from '@angular/core';

//Configurez le nouveau composant d'alertes de produit pour recevoir un produit en entrée:
import { Input} from '@angular/core';

import {Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  //define a property named product with an @Input() decorator. The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
  @Input() product;
  
  // In the component class, define a property named notify with an @Output() decorator and an instance of EventEmitter(). This allows the product alert component to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}