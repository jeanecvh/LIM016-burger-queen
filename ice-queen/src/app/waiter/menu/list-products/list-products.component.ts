import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  public menu: any [] = [];
  public lists: any [] = [];
  public category:  any [] = [];
  public type: String = " "

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
