import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallasComponent } from './batallas.component';

describe('BatallasComponent', () => {
  let component: BatallasComponent;
  let fixture: ComponentFixture<BatallasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatallasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
