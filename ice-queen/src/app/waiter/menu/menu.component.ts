import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
// src/app/services/data.service

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu: any [] = [];
  public lists: any [] = [];
  public category:  any [] = [];
  

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
    this.listProducts('')
    
  }
  
  listProducts(select:''){
    this.dataService.getJSON().subscribe(data => {
      const { menu } = data
      this.menu = menu   
      
      menu.filter((element:any) => {
       return element.category ==select? this.category.push(element[select]):element
        
      });

      console.log(this.category)
    })
  }

  categoryListener(e:any){
    this.category=[]
    const nameCategory = e.target.name
    this.listProducts(nameCategory)
  }

  listMenu (){
   // console.log(dataMenu)
  }

}
