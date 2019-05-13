import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Student } from '../student';

@Component({
    //moduleId: module.id,
    selector: 'card-ejzumba',
    templateUrl: 'card-ejzumba.component.html',
    styleUrls: ['card-ejzumba.component.scss']
})
export class CardEjzumbaComponent implements OnInit{

    me: Student;
    @Output() cardClick= new EventEmitter();

    constructor() {
        this.me = {
          ulid: 'ejzumba',
          name: 'Eric Zumbahlen',
          desc_short: 'Father of 2, web developer, and eternal student',
          desc_long: 'I\'m a former Air Force Seargent that now is a burgeoning developer. I interned \
          at State Farm over the summer and have accepted a full-time position there after graduation.\
          In what little free time I Have I enjoy reading, tinkering, and watching movies.',
          major: 'Information Systems Web Application Development',
          platform: 'JavaScript: Angular and JQuery \
          Java: Spring and JSF',
          hometown: 'Oblong, Illinois, USA',
          hobbies: 'Playing Games, Playing with my sons, Coding',
          inspiration: 'Myself',
          website: 'https://www.udemy.com/spring-hibernate-tutorial/',
          school: 'Illinois State University'
      };
    }

    sendClickedStudent() {
        //console.log('Clicked card');
        //console.log(this.me);
        // use emit method here
        this.cardClick.emit(this.me);
      }

    ngOnInit(){}
}
