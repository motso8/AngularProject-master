import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ButtonComponent } from "../button/button.component";
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private api : ApiService, private route : Router){
    
  }

  phoneNumber ?: number
  password?: string

  signIn(){
    
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

    this.api.login(postObj).subscribe((resp : any) => {
      console.log(resp.token)
      localStorage.setItem("token", resp.token)
      Swal.fire({
      title: 'Successfully Logged In',
      timer: 1500
    });
      this.route.navigateByUrl("/home")
    })
  }
  

}
