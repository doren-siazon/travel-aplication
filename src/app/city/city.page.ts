import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage {

  myAction() {
    console.log('myAction')
  }

  constructor() { }

  city: any[] = [

  {
    "_id": "60fa0563b890071eccbef907",
    "name": "City Vacation",
    "places": "Vigan",
    "des": "Vigan is famous for its well-preserved Spanish Colonial town, historical Vigan tourist spots, and delicious food and delicacies. Because of its charm, it has been inscribed as one of the UNESCO World Heritage Sites.",
    "img": "https://live.staticflickr.com/7589/16747582116_328402d58f_b.jpg",
    "__v": 0
},
{
    "_id": "60fa05a5b890071eccbef90a",
    "name": "City Vacation",
    "places": "Cebu City",
    "des": "The Magellan's Cross has been one of the traditional places to visit in Cebu because of its rich historical relevance. It has been claimed that the cross was indeed first planted in this spot, and this eventually led to the Spanish-era of the Philippines.",
    "img": "https://images.unsplash.com/photo-1505261476952-32e25cbfc755?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2VidSUyMGNpdHklMkMlMjBwaGlsaXBwaW5lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "__v": 0
},
{
    "_id": "60fa05d0b890071eccbef90c",
    "name": "City Vacation",
    "places": "Baguio City",
    "des": " Burnham Park features a man-made lake known as Burnham Lagoon, wooded areas, and numerous flower beds.",
    "img": "https://www.crownroundtable.org/wp-content/uploads/2019/03/images3031-5c91fb62c3bc7-1024x576.jpg",
    "__v": 0
},
{
    "_id": "60fa05fab890071eccbef90e",
    "name": "City Vacation",
    "places": "Leyte",
    "des": "The San Juanico Bridge, is an arch-shaped truss bridge in the Philippines stretching from Samar to Leyte crossing the San Juanico Strait. It is part of the Pan-Philippine Highway. It is the longest bridge in the Philippines spanning a body of water with a length of 2.16 kilometers.",
    "img": "https://gttp.imgix.net/257638/x/0/leyte-tours.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=1200&ar=1.91%3A1&fit=crop",
    "__v": 0
},
{
    "_id": "60fa0621b890071eccbef910",
    "name": "City Vacation",
    "places": "Taal Batangas",
    "des": "Galleria Taal is definitely a utopia for camera collectors and enthusiasts for it showcases Mr. Manny Inumerable’s vast collection of cameras from the late 1800’s, 1900’s up to date.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Taaljf2295_08.JPG/1200px-Taaljf2295_08.JPG",
    "__v": 0
},
{
    "_id": "60fa0643b890071eccbef912",
    "name": "City Vacation",
    "places": "Taal Batangas",
    "des": "Galleria Taal is definitely a utopia for camera collectors and enthusiasts for it showcases Mr. Manny Inumerable’s vast collection of cameras from the late 1800’s, 1900’s up to date.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Taaljf2295_08.JPG/1200px-Taaljf2295_08.JPG",
    "__v": 0
},
{
    "_id": "60fa066cb890071eccbef914",
    "name": "City Vacation",
    "places": "Mabini Batangas",
    "des": "Gulugod Baboy is the name of one of the peaks of Mt Pinagbanderahan. It was derived from the peak’s structure that resembles a pig (baboy) when viewed from the Pinagbanderahan peak.",
    "img": "https://thequeensescape.com/wp-content/uploads/2021/03/Mt.-Gulugod-Baboy-Hike-Civer.png",
    "__v": 0
},
{
    "_id": "60fa07d0178bb41c8c90e0d9",
    "name": "City Vacation",
    "places": "Tagaytay",
    "des": "Sky Ranch features the tallest ferris wheel in all the Philippines. Sky Eye and it takes riders to a height of more than 200 feet (or 63 meters).",
    "img": "https://www.tagaytay.gov.ph/images/slider/peoplespark.jpg",
    "__v": 0
},
{
    "_id": "60fa081b178bb41c8c90e0db",
    "name": "City Vacation",
    "places": " Davao City",
    "des": "Mount Apo is the highest mountain in the Philippines, and its name means Master or Grandfather. There are no known historic eruptions, but the volcano is considered still active.",
    "img": "https://www.davaocity.gov.ph/wp-content/uploads/2019/08/CIO_0183-e1592302052541.jpg",
    "__v": 0
},
{
    "_id": "60fa0846178bb41c8c90e0dd",
    "name": "City Vacation",
    "places": " Lucban Quezon ",
    "des": "Kamay ni Hesus is a popular tourist destination in Quezon. The church is claimed to be a healing church, which means devotees believe that healing prayers come true here in Kamay ni Hesus.",
    "img": "https://dhdnzx78tqry5.cloudfront.net/uploads/deal/thumb/65985.jpg",
    "__v": 0
}
]
}
