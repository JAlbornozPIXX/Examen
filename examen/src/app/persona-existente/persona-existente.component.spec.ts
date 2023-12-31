import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaExistenteComponent } from './persona-existente.component';

describe('PersonaExistenteComponent', () => {
  let component: PersonaExistenteComponent;
  let fixture: ComponentFixture<PersonaExistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaExistenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
