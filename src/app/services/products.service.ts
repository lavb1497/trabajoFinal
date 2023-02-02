import { Injectable } from '@angular/core';
import { collectionData, Firestore, deleteDoc } from '@angular/fire/firestore';
import { addDoc, collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private firestore:Firestore) { }

  addProducts(products:Products){
    const productsRef = collection(this.firestore, 'products');
    return addDoc(productsRef, products)
  }

  getProducts(): Observable<Products[]>{
    const productsRef = collection(this.firestore, 'products');
    return collectionData(productsRef, {idField:'id'}) as Observable<Products[]>
  }

  deletedProducts(products:Products){
    const productsRef = doc(this.firestore, `products/${products.id}`);
    return deleteDoc(productsRef)
  }
}
