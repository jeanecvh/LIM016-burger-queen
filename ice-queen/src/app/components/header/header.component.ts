import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLogged = this.authService.getUser();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
