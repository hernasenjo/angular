import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Product[] = [
    {
      title: "Producto 1",
      image: "assets/img/camiseta.jpg",
      price: 20,
      text: "Buen producto",
    },
    {
      title: "Producto 2",
      image: "assets/img/camiseta.jpg",
      price: 15,
      text: "Buen producto 2",
    },
    {
      title: "Producto 3",
      image: "assets/img/camiseta.jpg",
      price: 25,
      text: "Buen producto 3",
    },
  ];
   
}
