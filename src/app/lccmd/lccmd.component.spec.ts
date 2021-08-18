import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCcmdComponent } from './lccmd.component';

describe('LCcmdComponent', () => {
  let component: LCcmdComponent;
  let fixture: ComponentFixture<LCcmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LCcmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LCcmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
