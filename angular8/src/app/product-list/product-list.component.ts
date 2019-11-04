import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      title: "Producto 1",
      image: "assets/img/camiseta.jpg",
      price: 20,
      text: "Buen producto 1",
    },
    {
      id: 2,
      title: "Producto 2",
      image: "assets/img/camiseta.jpg",
      price: 15,
      text: "Un producto muy largo para probar el pipe slice",
    },
    {
      id: 3,
      title: "Producto 3",
      image: "assets/img/camiseta.jpg",
      price: 25,
      text: "Buen producto 3",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onClickedProduct(id: number) {
    console.log('clicked', id);
  }

}
