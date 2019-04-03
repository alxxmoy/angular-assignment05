import { Component } from '@angular/core';
import { Student } from './student';
import { SelectedStudentComponent } from './selected-student/selected-student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  title = 'IT 354 – Angular Assignment 05';

  clickedStudent: Student = {
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
  }
}
