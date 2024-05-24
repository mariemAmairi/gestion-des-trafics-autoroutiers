import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTraficComponent } from './update-trafic.component';

describe('UpdateTraficComponent', () => {
  let component: UpdateTraficComponent;
  let fixture: ComponentFixture<UpdateTraficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTraficComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
