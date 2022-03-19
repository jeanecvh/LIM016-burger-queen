import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { SaveOrdersService } from 'src/app/services/save-orders.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Input() product:  any [] = [];

  public menus: any [] = [];
  public lists: any [] = [];
  public category:  any [] = [];
  public type: String = " "

  constructor(
    private dataService : DataService,
    private saveOrdersService : SaveOrdersService
  ) { }

  ngOnInit(): void {
    this.listProducts('');
    console.log('Entrando data:', this.category)
  }

  listProducts(select:''){
    this.dataService.getJSON().subscribe(data => {
      const { menu } = data
      this.menus = menu

      menu.filter((element:any) => {
       return element.category ==select? this.category.push(element[select]):element

      });
      console.log('CATEGORY',this.category)
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

  addProduct(product:any){
    this.saveOrdersService.disparadorSaveOrder.emit({
      data: product
    })
    console.log('1.-disparador data (list products component)', product)
  }
  
}
