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
    ulid: '',
    name: '',
    desc_short: '',
    desc_long: '',
    major: '',
    platform: '',
    hometown: '',
    hobbies: '',
    inspiration: '',
    website: '',
    school: ''
  };

  receiveClickedStudent(clickedStudent: Student) {
    this.clickedStudent = clickedStudent;
    console.log(clickedStudent);
  }
}
