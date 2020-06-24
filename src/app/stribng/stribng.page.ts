import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stribng',
  templateUrl: './stribng.page.html',
  styleUrls: ['./stribng.page.scss'],
})
export class StribngPage implements OnInit {
  mystring: string = 'Welt!';

  constructor() { }

  ngOnInit() {
  }

}
