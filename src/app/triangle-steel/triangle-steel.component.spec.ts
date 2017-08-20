import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleSteelComponent } from './triangle-steel.component';

describe('TriangleSteelComponent', () => {
  let component: TriangleSteelComponent;
  let fixture: ComponentFixture<TriangleSteelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangleSteelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleSteelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
