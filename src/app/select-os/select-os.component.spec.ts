import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOSComponent } from './select-os.component';

describe('SelectOSComponent', () => {
  let component: SelectOSComponent;
  let fixture: ComponentFixture<SelectOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
