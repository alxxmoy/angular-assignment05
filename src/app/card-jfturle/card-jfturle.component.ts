import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'card-jfturle',
  templateUrl: './card-jfturle.component.html',
  styleUrls: ['./card-jfturle.component.css']
})
export class CardJfturleComponent implements OnInit {

  me: Student;
  @Output() cardClick = new EventEmitter();

  constructor() {
    this.me = {
      ulid: 'jfturle',
      name: 'James Turley',
      desc_short: 'I drink, and I know things',
      desc_long: 'I\'m a hobbyist that has a panchet for getting engrossed in whatever strikes my fancy.\
      Picking up new skills is always fun, but it\'s hard to feel competent without knowing every facet of them. \
      I also love sleep, but when left to my own devices I often don\'t give myself the luxury of getting enough of it. \
      I prefer the visual arts over the auditory, partly due to the visual stimulation, but mostly my lack of tempo.\
      To that end I often research how programmatic ideas and other sciences can be introduced to the world of gaming.',
      major: 'Information Systems: Web-dev',
      platform: 'JavaScript, C, Fortran, GLSL, HLSL, GL ES 3.0',
      hometown: 'Bloomington, Illinois, USA',
      hobbies: 'Gaming, coding, sleeping',
      inspiration: 'Nikola Tesla, Robert Oppenheimer, Syd Barrett',
      website: 'https://www.sitepoint.com',
      school: 'Illinois State University'
    };
  }

  ngOnInit() {
  }

  sendClickedStudent(){
    console.log('Clicked card');
    this.cardClick.emit(this.me);
  }
}
