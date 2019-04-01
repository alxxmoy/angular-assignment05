import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-card-jamcin2',
  templateUrl: './card-jamcin2.component.html'
})
export class CardJamcin2Component implements OnInit {

  me: Student;

  constructor() {
    this.me = {
      ulid: 'jamcin2',
      name: 'Jason McIntire',
      desc_short: 'Senior IT Analyst, Undergraduate in Information Systems',
      desc_long: 'Senior IT Analyst at Caterpillar. Self-taught web designer. \
      Automation enthusiast and AWS Cloud Practioner to-be. Pursuing Bacherlor\'s degree at ISU in Information Systems. \
      I love live music, especially Band of Heathens and JJ Grey. Found love of music @ Bonarroo in 2003.',
      major: 'Information Systems - Web Application Design',
      platform: 'JavaScript, Ionic, PHP (Laravel), VB.Net, PowerShell',
      hometown: 'Peoria, IL',
      hobbies: 'Camping, Travelling, Hiking',
      inspiration: 'President Obama',
      website: 'https://stackoverflow.com',
      school: 'Illinois State University'
    };
  }

  testClick() {
    console.log('this is a test');
  }

  ngOnInit() {
  }

}
