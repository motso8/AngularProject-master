import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Filter } from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetAll`)
  }

  getCategory(){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetAll`)
  }

  getCategoryById(id : number){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }

  getFiltered(filterObj : Filter){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${filterObj.vegeterian}&nuts=${filterObj.nuts}&spiciness=${filterObj.spiciness}`)
  }

  cart(postObj : any){
    return this.http.post(`https://restaurant.stepprojects.ge/api/Baskets/AddToBasket`, postObj)
  }

  getCartItems(){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Baskets/GetAll`)
  }

  deleteProduct(id : number){
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }

  updateCart(postObj1 : any){
    return this.http.put(`https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket`, postObj1)
  }

  register(postObj2 : any){
    return this.http.post(`https://rentcar.stepprojects.ge/api/Users/register`, postObj2)
  }

  login(postObj3 : any){
    return this.http.post(`https://rentcar.stepprojects.ge/api/Users/login`, postObj3)
  }

}
