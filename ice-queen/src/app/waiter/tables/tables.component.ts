import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(

  ) { }

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
