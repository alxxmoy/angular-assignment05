import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'card-amoy',
  templateUrl: './card-amoy.component.html',
  styleUrls: ['./card-amoy.component.css']
})
export class CardAmoyComponent implements OnInit {

  me: Student;

  // create var to hold EventEmitter object
  @Output() cardClick = new EventEmitter();

  constructor() {
    this.me = {
      ulid: 'amoy',
      name: 'Alex Moy',
      desc_short: 'IT student who is about to graduate.',
      desc_long: 'Student who has been a student for too long who is about to graduate in May. His whole life he has played with computers but only recently has he taken them serious. He only knows how to cook because he loves eating. He hopes to travel the world one day.',
      major: 'Web Application Development',
      platform: 'JavaScript, HTML, CSS, Java',
      hometown: 'Des Plaines, Illinois, USA',
      hobbies: 'gamin, fishin, browsin the web',
      inspiration: 'Obama',
      website: 'www.fb.com/alexander.j.moy',
      school: 'Illinois State University'
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
