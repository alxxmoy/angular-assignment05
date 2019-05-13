import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'card-keschae',
  templateUrl: './card-keschae.component.html',
  styleUrls: ['./card-keschae.component.css']
})
export class CardKeschaeComponent implements OnInit {

  me: Student;

  // create var to hold EventEmitter object
  @Output() cardClick = new EventEmitter();

  constructor() {
    this.me = {
      ulid: 'keschae',
      name: 'Calvin Schaefer',
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

  sendClickedStudent() {
    console.log('Clicked card');
    // use emit method here
    this.cardClick.emit(this.me);
  }

  ngOnInit() {
  }

}
