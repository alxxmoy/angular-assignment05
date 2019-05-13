import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLdpigmaComponent } from './card-ldpigma.component';

describe('CardLdpigmaComponent', () => {
  let component: CardLdpigmaComponent;
  let fixture: ComponentFixture<CardLdpigmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLdpigmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLdpigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
