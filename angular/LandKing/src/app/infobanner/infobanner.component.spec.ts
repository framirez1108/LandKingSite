import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobannerComponent } from './infobanner.component';

describe('InfobannerComponent', () => {
  let component: InfobannerComponent;
  let fixture: ComponentFixture<InfobannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
