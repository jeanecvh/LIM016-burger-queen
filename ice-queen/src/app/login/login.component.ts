import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})

export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('email') ? 'Correo inválido' : '';
  }
  ngOnInit(): void {
  }

  constructor(private authService: AuthService){

  }
  
  ingresar(){
    console.log(this.usuario)
    const { email, password } = this.usuario
    this.authService.register(email, password).then(res => {
      console.log('Se registró',res)
    })
  }

  ingresarConGoogle(){
    const { email, password } = this.usuario
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log('Se registró con google',res)
    })
  }

  obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res =>{
      console.log(res?.email)
    })
  }
  logout(){
   this.authService.logout();
  }
}

