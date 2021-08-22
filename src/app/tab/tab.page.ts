import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  myAction() {
    console.log('myAction')
  }


  constructor(private http: HttpClient) { }

  country: any = [];

  ngOnInit() {
    this.http.get(' http://localhost:3000/country' )
    .subscribe( data=>{
     console.log(data); 
     this.country = data;
    })


  }

}
