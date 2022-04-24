import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTecnologiasDialogComponent } from './ver-tecnologias-dialog.component';

describe('VerTecnologiasDialogComponent', () => {
  let component: VerTecnologiasDialogComponent;
  let fixture: ComponentFixture<VerTecnologiasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTecnologiasDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTecnologiasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
