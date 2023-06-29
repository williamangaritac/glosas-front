import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGlosasComponent } from './lista-glosas.component';

describe('ListaGlosasComponent', () => {
  let component: ListaGlosasComponent;
  let fixture: ComponentFixture<ListaGlosasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGlosasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGlosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
