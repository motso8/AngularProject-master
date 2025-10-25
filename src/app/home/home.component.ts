import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../models/product';
import { FormsModule } from '@angular/forms';
import { Categories } from '../models/categories';
import { ButtonComponent } from "../button/button.component";
import Swal from 'sweetalert2';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FormsModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  rangeValue: number = 0
  Isnuts: boolean = false
  Isvegetarian: boolean = false
  spiciness: number = 0
  selectedCategoryId: number = 0
  searchText?: string




  constructor(private api : ApiService, private route : Router){

  }

  productsArr : Product[] = []
  categoriesArr : Categories[] = []

  ngOnInit(){
    this.api.getAll().subscribe((resp : any) => {
      console.log(resp)
      this.productsArr = resp
    })

    this.api.getCategory().subscribe((resp1: any) => {
      console.log(resp1);
      this.categoriesArr = [{ id: 0, name: "All" }, ...resp1]
    });

  }
  getCategoryId(id : number) {
    this.selectedCategoryId = id

  if(this.selectedCategoryId == 0){
    this.api.getAll().subscribe((resp : any) => {
      this.productsArr = resp
      console.log(resp)
    })
  } 
  
  else{
    this.api.getCategoryById(id).subscribe((resp : any) => {
      console.log(resp.products)
      this.productsArr = resp.products
    })
  }
}

// search(){
//   console.log(this.searchText)
//     this.productsArr =this.productsArr.filter((product: Product) => 
//       product.name?.toLowerCase().includes(this.searchText?.toLowerCase() || ''))
//       console.log(this.productsArr)
// }

addToCart(productId: number, price: number) {
  if(localStorage.getItem("token") != null || localStorage.getItem("token") != undefined){
  let postObj = {
    quantity: 1,
    price: price,
    productId: productId
  }
    this.api.cart(postObj).subscribe((resp: any) => {
    console.log("Added To Cart", resp)
  })

   Swal.fire({
    title: 'Added to cart!',
    timer: 1500
  });
  }

  else{
     Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you must login before placing an order.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        iconColor: '#721c24',
      });

    this.route.navigateByUrl("/login")
  }
}

filter(){
  let filterObj: Filter = {
    vegeterian: this.Isvegetarian,
    nuts: this.Isnuts,
    spiciness: this.rangeValue
  }
 
  this.api.getFiltered(filterObj).subscribe((resp2: any) => {
    console.log(resp2)
    this.productsArr = resp2
  })
}

reset(){
  this.Isvegetarian = false
  this.Isnuts = false
  this.rangeValue = 0

  this.filter()

    this.api.getAll().subscribe((resp : any) => {
    console.log(resp)
    this.productsArr = resp
  })
}

}
