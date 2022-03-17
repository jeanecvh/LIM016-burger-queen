import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})

export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public dataService: DataService,
    public router: Router
    ) { }

    public user = {
      id: '',
      email:'',
      password: '',
      profile:'',
    }
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

    ingresar(){
    const { email, password } = this.user
     this.authService.login(email, password).then(res => {
      console.log('Se registró con google',res)
    })
    this.Profile()
  }

  Profile(){
    this.dataService.getJSON().subscribe( data => {
      const userLog = this.authService.getUserLogged();
      console.log('aaaaaa',userLog);
       userLog.subscribe((res:any) => {
        const userEmail = res.email;
        const usersData = data.users;
        console.log(userEmail , usersData);
        const find = usersData.filter((x:any) => x.email == userEmail)
        const profile = find[0].profile;
        console.log(profile);///
        if (profile === 'waiter') {
          this.router.navigateByUrl('waiter/menu')
        } else if (profile === "chef"){
          this.router.navigateByUrl('/kitchen/order')
        };
        this.dataService.disparador.next(find[0]);
      })
    })
  }

  /*
    getErrorMessage() {
    return this.email.hasError('email') ? 'Correo inválido' : '';
  }

  ingresarConGoogle(){
    const { email, password } = this.user
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log('Se registró con google',res)
    })
  }
  crearuser(){
    console.log(this.user)
    const { email, password } = this.user
    this.authService.register(email, password).then(res => {
      console.log('Ingreso con correo',res)
    })
  }*/

  ngOnInit(): void {
  }
}

