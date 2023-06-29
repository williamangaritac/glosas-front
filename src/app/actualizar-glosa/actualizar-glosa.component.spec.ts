import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGlosaComponent } from './actualizar-glosa.component';

describe('ActualizarGlosaComponent', () => {
  let component: ActualizarGlosaComponent;
  let fixture: ComponentFixture<ActualizarGlosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarGlosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarGlosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
