import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'card-akruft',
  templateUrl: './card-akruft.component.html',
  styleUrls: ['./card-akruft.component.css']
})
export class CardAkruftComponent implements OnInit {

  me: Student;

  @Output() messageEvent = new EventEmitter<Student>();

  constructor() {
    this.me = {
      ulid: 'akruft',
      name: 'Alyssa Kruft',
      desc_short: 'Senior computer science major.',
      desc_long: 'Senior computer science major. \
      Graduating in May, starting work at Discover Financial Services in June. \
      Very excited that winter is almost over.',
      major: 'Computer Science',
      platform: 'Java',
      hometown: 'Wauconda, Illinois, USA',
      hobbies: 'Reading science fiction, napping',
      inspiration: 'Terry Pratchett',
      website: 'www.youtube.com',
      school: 'Illinois State University'
    };
  }

  ngOnInit() {
  }

  sendMessage(){
    this.messageEvent.emit(this.me);
  }

}
