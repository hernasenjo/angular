import { Component } from "@angular/core";
import { Product } from "./../models/product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {

    product: Product = {
        title: "Producto 1",
        image: "",
        price: 20,
        text: "Buen producto"
    }
}