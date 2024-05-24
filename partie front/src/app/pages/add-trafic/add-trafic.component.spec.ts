import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTraficComponent } from './add-trafic.component';

describe('AddTraficComponent', () => {
  let component: AddTraficComponent;
  let fixture: ComponentFixture<AddTraficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTraficComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
