import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKeschaeComponent } from './card-keschae.component';

describe('CardKeschaeComponent', () => {
  let component: CardKeschaeComponent;
  let fixture: ComponentFixture<CardKeschaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardKeschaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardKeschaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
