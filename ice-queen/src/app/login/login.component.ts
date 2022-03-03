import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../service/auth.service';

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

  Ingresar(){
    console.log(this.usuario)
    const {email,password} = this.usuario;
    this.authService.login(email,password).then(res => {
      console.log('se registro: ', res);

    })
  }

  obtenerUsuario(){
    this.authService.getUser().subscribe(res => {
      console.log(res?.email);
    })
  }

  logOutUser(){
    this.authService.logOut();
    console.log('se deslogueó');

  }

  ngOnInit(): void {
  }

}

