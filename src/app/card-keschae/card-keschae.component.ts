import { Component, OnInit } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'app-card-keschae',
  templateUrl: './card-keschae.component.html',
  styleUrls: ['./card-keschae.component.css']
})
export class CardKeschaeComponent implements OnInit {

  me: Student;

  constructor() {
    this.me = {
      ulid: 'keschae',
      name: 'Kevin Schaefer',
      desc_short: 'Small business manager, web developer and university instructor',
      desc_long: 'Small business manager, web developer and university instructor. I never stop learning. \
      Always learning something new. I used to love playing music but I will be always a fan. \
      Love the band Umphrey\'s McGee and many other popular and eclectic musicians.',
      major: 'Applied Computer Science',
      platform: 'JavaScript: Angular and PHP: Laravel',
      hometown: 'Ellsworth, Illinois, USA',
      hobbies: 'Guitars, music, coding',
      inspiration: 'Teddy Roosevelt',
      website: 'https://www.sitepoint.com',
      school: 'Illinois Wesleyan University'
    };
  }

  ngOnInit() {
  }

}
