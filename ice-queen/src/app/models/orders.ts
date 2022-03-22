

export class Orders {
  clientName: string;
  table?: number;
  products: Array<Product>;
  date: Array<OrderDate>;
  total?: number;
  status: string;

  constructor(clientName: string, table: number, products: Array<Product>, date: Array<OrderDate>, total: number, status:string) {
    this.clientName= clientName;
    this.table = table;
    this.products = products;
    this.date = date;
    this.total = total;
    this.status = status;
  }

}

export class Product {
  amount: number;
  flavors: string;


  constructor(amount: number, flavors: string) {
    this.amount = amount;
    this.flavors = flavors;

  }

}

export class OrderDate {
  monthDateYear: string;
  hourMinutes: string;

  constructor(monthDateYear: string, hourMinutes: string){
    this.monthDateYear = monthDateYear;
    this. hourMinutes= hourMinutes;
  }

}
