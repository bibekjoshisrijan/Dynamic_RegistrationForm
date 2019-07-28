import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeekeeperComponent } from './beekeeper.component';

describe('BeekeeperComponent', () => {
  let component: BeekeeperComponent;
  let fixture: ComponentFixture<BeekeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeekeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
