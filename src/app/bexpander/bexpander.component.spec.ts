import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BexpanderComponent } from './bexpander.component';

describe('BexpanderComponent', () => {
  let component: BexpanderComponent;
  let fixture: ComponentFixture<BexpanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BexpanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BexpanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
