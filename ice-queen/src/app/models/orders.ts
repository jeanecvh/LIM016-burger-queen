

export class Orders {
  clientName: string;
  table: string;
  products: Array<Product>;
  date: Array<OrderDate>;
  total?: number;
  status: string;
  startTime?: number;
  readyTime?: string; 

  constructor(clientName: string, table: string, products: Array<Product>, date: Array<OrderDate>, total: number, status:string, startTime: number, readyTime: string) {
    this.clientName= clientName;
    this.table = table;
    this.products = products;
    this.date = date;
    this.total = total;
    this.status = status;
    this.startTime = startTime
    this.readyTime = readyTime
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

export interface DataUpdate {
  id: string;
  data : {
    id: string;
    clientName: string;
    table: string;
    products: Array<Product>;
    date: Array<OrderDate>;
    total?: number;
    status: string;
  }
}
