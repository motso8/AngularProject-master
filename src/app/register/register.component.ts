import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ButtonComponent } from "../button/button.component";
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private api : ApiService, private route : Router){

  }

  phoneNumber ?: number
  password?: string

  signUp(){

    if(this.phoneNumber == null || this.password == undefined){
      Swal.fire({
      icon: 'error',
      title: 'Missing Fields',
      text: 'Please fill in phone number, password, and email.',
      timer: 2000
    });
    }

    let postObj  = {
      phoneNumber: this.phoneNumber,
      password: this.password,
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      role: 'string'
    }

    this.api.register(postObj).subscribe(resp => {
      console.log(resp)
      Swal.fire({
      title: 'Successfully Registered',
      timer: 1500
    });
      this.route.navigateByUrl("/login") 
    })
  }
  


}
