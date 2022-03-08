import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
// src/app/services/data.service

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getJSON().subscribe(data => {
      console.log(data)
    })
  }

}
