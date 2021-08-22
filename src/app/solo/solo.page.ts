import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo',
  templateUrl: './solo.page.html',
  styleUrls: ['./solo.page.scss'],
})
export class SoloPage implements OnInit {

  myAction() {
    console.log('myAction')
  }
  constructor() { }

  ngOnInit() {
  }

}
