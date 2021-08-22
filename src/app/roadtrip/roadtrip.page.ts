import { Component } from '@angular/core';

@Component({
  selector: 'app-roadtrip',
  templateUrl: './roadtrip.page.html',
  styleUrls: ['./roadtrip.page.scss'],
})
export class RoadtripPage {

  myAction() {
    console.log('myAction')
  }

  constructor() { }

  city: any[] = [


  {
    "title": "ROADTRIP",
    "img": "https://lh3.googleusercontent.com/proxy/6EyGgbkbzUxNFfmbC3a0oUQZIaTizh7gHXxEh8IOUP2-l_ykszt03RvUZRGw2NZ3P0f9YQ0hTpaAuNx2OQcCYScF7cY7rnn_Oet3ns415ytQMMaH8A",
    "places": "Halsema Highway (Benguet-Mountain Province Road)",
    "des":  "The drive is the journey itself: traversing this 150-kilometer stretch of road—the country’s highest road system (highest point is in the municipality of Atok, Benguet at 2,260 meters above sea level)—takes you from Baguio City to the municipality of Bontoc, Mountain Province",
   },
   {
   "img": "https://i.pinimg.com/originals/5c/49/36/5c4936714e5b432bb6f46be3590ca00f.jpg",
    "places": "Baguio City",
    "des":  "An all-time favorite place to go to enjoy cool weather, spectacular scenery, and great dining experience. This city 240 kilometers away from Metro Manila, offers breathtaking views along the way especially when you reach the town of Sison.",
   },
   {
   "img": "https://i2.wp.com/www.traveling-up.com/wp-content/uploads/2015/03/motorcycle-marilaque-road.jpg?resize=600%2C400&ssl=1",
    "places": "Tanay, Rizal",
    "des":  "You will definitely enjoy off-road driving in Sapang Bato in Angeles, Pampanga (toward Pinatubo) but this area in Daraitan is just a short drive away from Metro Manila and offers an equally challenging river crossings.",
   },
   {
   "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-l2c5Yt4OvNJP08933r-Exqso7Hk4zFoIXkyphCSJm_Q3Dml8twO3ZJVmSEgcKSeL38&usqp=CAU",
    "places": "Route 66, USA",
    "des":  "Route 66 is pretty much the definitive road trip. Spanning two thousand plus miles across eight states, this was the original road trip to take across the US, and it still holds that status today in the minds of many.",
   },
   {
   "img": "https://dgx9rrgrsfte9.cloudfront.net/wp-content/uploads/2019/01/02151900/otaway-nationalpark-australiamtourism.jpg",
    "places": "Great Ocean Road, Australia",
    "des":  "This drive made it into the top five of UK traveler’s wish lists for road trips they wanted to do, and I can definitely see why – I enjoyed it so much the first time I drove it that I did it twice more",
    }
   
   
  ]



}




