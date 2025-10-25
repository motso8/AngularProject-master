import { Component, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-basket',
  imports: [CommonModule, FormsModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {

  constructor(private api: ApiService, private route: Router) {}

  product : CartItem[] = []

  ngOnInit(){
    this.api.getCartItems().subscribe((resp : any) =>{
      console.log(resp)
      this.product = resp
    })
  }

  deleteItem(id : number){
    this.api.deleteProduct(id).subscribe(resp1 => {
      console.log("Deleted Item", resp1)
    })

    Swal.fire({
    title: 'Product Deleted',
    timer: 1500
  });
  }

  success(){
    if(localStorage.getItem("token") != null || localStorage.getItem("token") != undefined){
      this.route.navigateByUrl("/home")
      Swal.fire({
        icon: 'success',
        title: 'Product Delivered!',
        text: 'Your product has been successfully delivered.',
        showConfirmButton: false,
        timer: 2000,
        background: '#d4edda',
        iconColor: '#28a745',
      });

    }

    else{
      Swal.fire({
      title: 'Please Log In First',
      timer: 1500
    });
    }
  }
 increase(item : CartItem) {
  let newQuantity = item.quantity + 1

  let putObj = {
    quantity: newQuantity,
    price: item.price,
    productId: item.product.id
  }

  this.api.updateCart(putObj).subscribe(resp => {
    console.log(resp);
    item.quantity = newQuantity;
  })
}

decrease(item : CartItem) {
  if(item.quantity < 2){
     Swal.fire({
      title: 'Quantity cannot be less than 1',
      icon: 'warning',
     });
  }
  let newQuantity = item.quantity - 1

  let putObj = {
    quantity: newQuantity,
    price: item.price,
    productId: item.product.id
  }

  this.api.updateCart(putObj).subscribe(resp => {
    console.log(resp)
    item.quantity = newQuantity
  })
}

}


export class Product {
  categoryId!: number
  id!: number
  image?: string
  name?: string
  nuts?: boolean
  price?: number
  spiciness?: number
  vegeterian?: boolean
}

export class CartItem {
  price?: number;
  product!: Product;
  quantity!: number;
}
