import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {



    constructor(private api : ApiService){

    }

    productsArr : Product[] = []

    logout(){
      localStorage.removeItem("token")
      Swal.fire({
      title: 'Logged Out',
      timer: 1500
    });
    }
     menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}
