import { Component, } from '@angular/core';

@Component({
  selector: 'app-cruise',
  templateUrl: './cruise.page.html',
  styleUrls: ['./cruise.page.scss'],
})
export class CruisePage {


  myAction() {
    console.log('myAction')

  }


constructor() { }

city: any[] = [



  {
    "title": "CRUISE",
    "img": "https://thepointsguy.com/wp-content/uploads/2019/03/Disney-Cruise-March-2019_SHull-146.jpg",
    "places": "Disney Dream",
    "des":  "Winning the Cruisers Choice Awards for the best overall ship in the large category, Disney Dream is the pride of Disney Cruise Line. Setting itself apart from the other ships of Disney Wonder, Disney Magic, and Disney Fantasy, Disney Dream has been successfully making every cruiser’s dreams come true ever since 2011."
  },
  {
    "img": "https://i.ytimg.com/vi/lkDONoy6sks/hqdefault.jpg",
    "places": "Celebrity Reflection",
    "des":  "In order to enable the cruisers to make the most out of their vacation time, the famous Celebrity Cruises offers extravagant cruise ships which journeys to some of the most exotic destinations in the world."
  },
  { 
  "img": "https://www.ship-technology.com/wp-content/uploads/sites/16/2017/10/2l-image-35.jpg",
    "places": "Viking Star",
    "des":  "Viking Star is the first ocean ship amongst all the sister ships of Viking Ocean Cruises. With a passenger and crew ratio of 2:1, Viking Star offers personalized experiences that are destination-oriented."
    }
 ]

}
