import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTareasDialogComponent } from './ver-tareas-dialog.component';

describe('VerTareasDialogComponent', () => {
  let component: VerTareasDialogComponent;
  let fixture: ComponentFixture<VerTareasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTareasDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTareasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
