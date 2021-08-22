import { Component} from '@angular/core';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.page.html',
  styleUrls: ['./volunteering.page.scss'],
})
export class VolunteeringPage  {

  myAction() {
    console.log('myAction')
  }

  constructor() { }
  city: any[] = [


    {
      "title": "VOLUNTEERING VACATION",
      "img": "https://media.4-paws.org/a/9/b/d/a9bd2520c2a7c941680bbfc56182ed5615e7cd3c/VIER%20PFOTEN_2016-09-18_081-1927x1333.jpg",
      "places": "Animal Rescue Shelters",
      "des":  "There aren’t many pet-friendly apartments out there these days, but there are always pets in need of companionship at the shelter. Spending quality time with your furry friends is priceless. Get out there and visit a shelter.",
     },
     {
      "img": "https://www.aljazeera.com/wp-content/uploads/2021/04/000_98F46J.jpg?resize=770%2C513",
      "places": "Food Pantries",
      "des":  "Whether collecting food at the county fair, boxing up delicious deliverables, or serving lunch at the library, food pantry volunteers are providing hunger relief for many local families. Find out how you can get involved.",
     },
     { 
     "img": "https://www.sunstar.com.ph/uploads/images/2018/05/06/49100.jpg",
      "places": "Habitat for Humanity",
      "des":  "Whether you want to help out for a day or commit for a season, this volunteer-driven organization has many opportunities to work on construction sites to learn sustainable building practices, sell used items in their ReStore or just help around the office.",
     },
     {
      "img": "https://bloximages.chicago2.vip.townnews.com/mankatofreepress.com/content/tncms/assets/v3/editorial/e/2e/e2e537a0-545a-11eb-a1cc-43b66fea1a35/5ffccea186dac.image.jpg?resize=1200%2C852",
      "places": "Local Libraries",
      "des":  "Still a vital source in the community, libraries are always looking for volunteers to lead book discussion groups, work with children, lead adult literacy programs or even just help collect and organize material for shelving. Check your local library’s website for details about what you can do",
     },
     {
      "img": "https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2017/10/1140-museum-tour-guide-museum-guides-insider.jpg",
      "places": "Museums",
      "des":  "You don’t need a background in art history to work at the museum. Many local museums rely on the enthusiasm and energy of volunteers to enhance the experience for their visitors. Check out our recent list of the best museum jobs in the Bay Area.",
     }

]
}
