import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlosaDetallesComponent } from './glosa-detalles.component';

describe('GlosaDetallesComponent', () => {
  let component: GlosaDetallesComponent;
  let fixture: ComponentFixture<GlosaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlosaDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlosaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
