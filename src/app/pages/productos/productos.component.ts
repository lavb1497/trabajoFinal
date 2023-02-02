import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  products!:Products[];

  constructor(private productsService:ProductsService){}

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(products => {
      this.products = products
    })
  }
}
