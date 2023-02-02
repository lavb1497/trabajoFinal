import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit{

  products!:Products[];

  constructor(private productsService:ProductsService){}

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(products => {
      this.products = products
    })
  }

  onClickDeleted(product : Products){
    const response = this.productsService.deletedProducts(product);
    console.log(response)
  }
}
