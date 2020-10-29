import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
   items=[];
   addToCart(product){
     this.items.push(product);
   }
    getItem(product){
    return product;
   }
    clearCart(){
     this.items=[];
   }

  constructor() { }

}