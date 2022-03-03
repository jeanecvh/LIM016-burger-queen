import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  usuario= {
    email:'',
    password: ''
  }
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('email') ? 'Correo inválido' : '';
  }

  crearUsuario(){
    console.log(this.usuario)
    const { email, password } = this.usuario
    this.authService.register(email, password).then(res => {
      console.log('Ingreso con correo',res)
    })
  }

  ingresar(){
    console.log(this.usuario)
    const { email, password } = this.usuario
    this.authService.login(email, password).then(res => {
      console.log('Ingreso con correo',res)
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

  ngOnInit(): void {
  }
}

