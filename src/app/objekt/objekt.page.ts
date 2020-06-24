import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objekt',
  templateUrl: './objekt.page.html',
  styleUrls: ['./objekt.page.scss'],
})
export class ObjektPage implements OnInit {
  person: any = { name : 'Muster', vorname : 'Max' };

  constructor() { }

  ngOnInit() {
  }

}
