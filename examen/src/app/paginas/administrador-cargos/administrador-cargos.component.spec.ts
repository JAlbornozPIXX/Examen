import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorCargosComponent } from './administrador-cargos.component';

describe('AdministradorCargosComponent', () => {
  let component: AdministradorCargosComponent;
  let fixture: ComponentFixture<AdministradorCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorCargosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministradorCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
