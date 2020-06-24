import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {
    fruechte: any= [
      {name:'Orange', img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F34500000%2FOrange-Fruit-orange-34512881-2260-2175.jpg&f=1&nofb=1'},
      {name:'Banane', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcharinacabswords.files.wordpress.com%2F2015%2F07%2Fhealth-benefits-of-bananas.jpg&f=1&nofb=1\''},
      {name:'Apfel', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3e%2FApfel-Pinova.jpg%2F1200px-Apfel-Pinova.jpg&f=1&nofb=1'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
