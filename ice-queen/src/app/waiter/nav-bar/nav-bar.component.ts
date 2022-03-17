import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public userLogged = this.authService.getUserLogged();
  public dataUser: any;
  roleChef: boolean = false;
  roleWaiter: boolean = false;

  constructor(private authService: AuthService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataUser=this.dataService.disparador.getValue();
    //console.log("este es el usuario: ", this.dataUser);
    this.roleWaiter = this.dataUser.rol == 'waiter' ? true : false;
    this.roleChef = this.dataUser.rol == 'chef' ? true : false;
  }

}
