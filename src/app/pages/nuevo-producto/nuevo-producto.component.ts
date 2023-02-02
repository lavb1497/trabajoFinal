import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit{

  formRegister!:FormGroup;

  constructor (private productsService:ProductsService){

    this.formRegister = new FormGroup({
      nameProduct: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      img: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  async onSubmit(){
    console.log(this.formRegister.value);
    const response = this.productsService.addProducts(this.formRegister.value)
    console.log(response)
  }
}
