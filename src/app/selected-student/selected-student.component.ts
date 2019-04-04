import { Component, OnInit, Input } from '@angular/core';

import { Student } from '../student';
@Component({
  selector: 'selected-student',
  templateUrl: './selected-student.component.html',
  styleUrls: ['./selected-student.component.css']
})
export class SelectedStudentComponent implements OnInit {

  @Input() selected: Student;


  constructor() {
    
   }
  ngOnInit() {
  }

}
