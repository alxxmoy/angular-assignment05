import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Student } from '../student';


@Component({
  selector: 'app-card-ldpigma',
  templateUrl: './card-ldpigma.component.html',
  styleUrls: ['./card-ldpigma.component.css']
})
export class CardLdpigmaComponent implements OnInit {

  me: Student;

 @Output() cardClick = new EventEmitter();


  constructor() {
    this.me = {
      ulid: 'ldpigma',
      name: 'Luke Pigman',
      desc_short: 'Senior Information Systems - Web App student',
      desc_long: 'My whole life I\'ve had a passion for technology and the way it\'s changing the world.',
      major: 'Information Systems - Web App Dev.',
      platform: 'html, css, js, Node.js, python, angular, 9 and 3/4',
      hometown: 'LaGrange, Illinois, USA',
      hobbies: 'Percussion, music, biking, snowboarding, coding',
      inspiration: 'Barack Obama',
      website: 'https://www.linkedin.com/in/luke-pigman/',
      school: 'Illinois State University'
    };
  }

  sendClickedStudent() {
    this.cardClick.emit(this.me);
    console.log("Clicked student");
  }

  ngOnInit() {
  }



}
