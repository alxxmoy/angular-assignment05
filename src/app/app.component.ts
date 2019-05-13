import { Component, Input } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IT 354 – Angular Assignment 05';

  @Input() clickedStudent: Student = {
    ulid: 'keschae',
    name: 'Kevin Schaefer',
    desc_short: 'Small business manager, web developer and university instructor',
    desc_long: 'Small business manager, web developer and university instructor. I never stop learning. \
    Always learning something new. I used to love playing music but I am always a fan. \
    Love the band Umphrey\'s McGee and many other popular and eclectic musicians.',
    major: 'Applied Computer Science',
    platform: 'JavaScript: Angular and PHP: Laravel',
    hometown: 'Ellsworth, Illinois, USA',
    hobbies: 'Guitars, music, coding',
    inspiration: 'Teddy Roosevelt',
    website: 'https://www.sitepoint.com',
    school: 'Illinois Wesleyan University'
  };


  receiveClickedStudent(clickedStudent: Student) {
    this.clickedStudent = clickedStudent
}
}