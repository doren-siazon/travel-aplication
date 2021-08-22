import { Component, } from '@angular/core';

@Component({
  selector: 'app-camping',
  templateUrl: './camping.page.html',
  styleUrls: ['./camping.page.scss'],
})
export class CampingPage  {
  myAction() {
    console.log('myAction')
  }

  constructor() { }


  city: any[] = [


  {
    "title": "CAMPING VACATION",
    "img": "http://www.thebirdhouseelnido.com/wp-content/uploads/2019/07/top-bg.jpg",
    "places": "The Birdhouse ",
    "des":  "The Birdhouse in the Palawan municipality of El Nido is the epitome of glamorous camping. Each luxury tent, which they aptly refer to as “nests,” can sleep up to four people and has a private bathroom and outdoor lounge area.",
   },
   {
    "img": "https://www.arapatria.com/wp-content/uploads/2021/05/t-house-the-bloc.jpg",
    "places": "BLOC Camp Site",
    "des":  "The glamp grounds are surrounded by greenery and the ambiance is serene that will make your weekend escape perfect.  You can also enjoy activities on the lake like swimming, paddle boarding, or hop on a rowboat and visit the islet of your choice. After a good night’s sleep in the cozy glamorous tents, wake up early to catch the breathtaking sunrise.",
   },
   {
    "img": "https://www.philippinebeaches.org/wp-content/uploads/2014/07/Zambales-Beaches.jpg",
    "places": "Nagsasa Cove",
    "des":  "One difference for which people prefer Nagsasa is that it attracts fewer crowds, so this is probably a better bet for weekend camping. As in Anawangin, enjoy stunning views and scenic activities like trekking up and around its mountainous terrain."
   },
   {
    "img": "https://adventures-of-leonard.weebly.com/uploads/2/6/0/2/26021397/20638558-10213027492709351-1984560709211466730-n_2_orig.jpg",
    "places": "Camp Explore Antipolo",
    "des":  "It is famous for its team building and family activities. Their base camp is located in Calawis, Antipolo, at the foot of the Sierra Madre embraced by the beauty of nature.",
   },
   {
    "img": "https://1.bp.blogspot.com/-TgLGkAY5O6o/WV5BWlX7TeI/AAAAAAAAOVg/e5nHUQoKz-gJEXIQDy-0HULcGSbf01-zACLcBGAs/s640/CelineismTenCentsToHeaven.png",
    "places": "Ten Cents to Heaven",
    "des":  "Ten Cents to Heaven was not named that way for nothing. This campsite in Tanay Rizal offers a perfect view of the Sierra Madre mountain ranges and Laguna de Bay. Sometimes, the low-lying clouds descend to the camp and make you feel closer to “heaven” hence the name.",
    }

   
 
   ]
}
