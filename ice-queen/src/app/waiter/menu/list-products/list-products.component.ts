import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { SaveOrdersService } from 'src/app/services/save-orders.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Input() data!: any;

  public menus: any [] = [];
  public lists: any [] = [];
  public category:  any [] = [];
  public type: String = " "

  constructor(
    private dataService : DataService,
    private saveOrdersService : SaveOrdersService
  ) { }

  ngOnInit(): void {
    this.listProducts('')

  }

  listProducts(select:''){
    this.dataService.getJSON().subscribe(data => {
      const { menu } = data
      this.menus = menu

      menu.filter((element:any) => {
       return element.category ==select? this.category.push(element[select]):element

      });
      console.log('que es list',this.category)
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

  addProduct(){
    this.saveOrdersService.disparadorSaveOrder.emit({
      data:this.data
    })
    console.log('disparador data',this.data)
  }
}
