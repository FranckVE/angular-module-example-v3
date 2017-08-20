import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareOakComponent } from './square-oak.component';

describe('SquareOakComponent', () => {
  let component: SquareOakComponent;
  let fixture: ComponentFixture<SquareOakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareOakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
