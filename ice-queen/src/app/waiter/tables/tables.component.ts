import { Component, OnInit } from '@angular/core';
import { Tables } from 'src/app/models/tables.model';
import { TablesCollectionService } from 'src/app/services/tables-collection.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  tables: Tables = new Tables();
  submitted = false;

  constructor(
    private tablesCollectionService: TablesCollectionService) { }


    saveTable(): void {
      this.tablesCollectionService.create(this.tables).then(() => {
        console.log('Created new item successfully!');
        this.submitted = true;
      });
    }

    addNewTable(): void {
      this.submitted = false;
      this.tables = new Tables();
    }

  addCards() {
    const buttonAdd = document.querySelector('#btn-add')
    buttonAdd?.addEventListener('click', async (e) => {
      e.preventDefault()
      console.log('funcionaaaaaaaaa')
      /*let html = "";
      html +=  ``

    const cardCointainer = document.getElementById('tables-area');
    if (cardCointainer) cardCointainer.innerHTML = html;*/
    })
  }


  ngOnInit(): void {
  }

}
