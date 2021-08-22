import { Component, } from '@angular/core';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.page.html',
  styleUrls: ['./resort.page.scss'],
})
export class ResortPage {



  myAction() {
    console.log('myAction')
  }

  constructor() { }

  city: any[] = [
    


{
  "title": "RESORT VACATION",
  "img": "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/03/3a/15/caption.jpg",
  "places":"Sea Spring Resort",
  "des":  "It is nestled in over 5 hectares of lush tropical valley in Mainit, Mabini, Batangas. It's a perfect escape from the busy life in the city.",
 },
 {
 
 "img": "https://elnidocornerstone.com/wp-content/uploads/2016/09/El-Nido-Resorts-Lagen-Island.jpg",
  "places": "El Nido Resort Lagen Island",
  "des":  "Nestled between a lash four-hectare forest and a calm, shallow lagoon, Lagen  Island, El Nido Resorts' Eco-Sanctuary island resort, has the densest forest over lime stone out of the 45 islands and islets of Bacuit Bay.",
 },
 {
 
  "img": "https://pix10.agoda.net/hotelImages/951144/-1/031a05c5cea41844e12395f49f4d639f.jpg?s=1024x768",
  "places": "Blue Hotel and Resort  ",
  "des":  "It is located in Lalakay, Los Banos Laguna. It’s only 7.3 KM from the city center. Because of its great location, guests can have easy access to many local attractions. It offers superior services and a broad range of amenities. ",
 },
 {
  
 "img": "https://www.thebellevuebohol.com/wp-content/uploads/2018/09/1-1024x546.jpg",
  "places": "The Bellevue Resort",
  "des":  "Located at Panglao City Bohol. It is an ASEAN Green Hotel awardee. Eco-friendly principles and energy conservation measures are in place to ensure sustainable tourism at this hotel.",
  },
 {
 
 "img": "https://pix10.agoda.net/hotelImages/488100/-1/6b3885514279462434565b86dddba9ce.jpg?s=1024x768",
  "places": "Makiling Highlands Resort  ",
  "des":  "It is located in Bagong Kalsada, Calamba. Guests can have easy access to the city’s tons of attractions and landmarks including Makiling Highlands, Miramonte Village, C-A-T 2 Hotspring Private Pool. ",
 }






  ]
}
