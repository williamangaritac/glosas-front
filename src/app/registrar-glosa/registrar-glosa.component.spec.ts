import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarGlosaComponent } from './registrar-glosa.component';

describe('RegistrarGlosaComponent', () => {
  let component: RegistrarGlosaComponent;
  let fixture: ComponentFixture<RegistrarGlosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarGlosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarGlosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
