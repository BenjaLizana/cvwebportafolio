import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MatOption, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-profesional-experience',
  templateUrl: './profesional-experience.component.html',
  styleUrls: ['./profesional-experience.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-CL' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class ProfesionalExperienceComponent implements OnInit {
  addressForm = this.fb.group({
    fechaIngreso: new Date(2021,8,13),
    fechaTermino: '',
    empresa: 'Socius Arquitectura y Plataformas Tecnológicas',
    cargo: 'Desarrollador de Software Full Stack'
  });
  fecha:number | undefined = 0

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.fecha = new Date().getFullYear()
    console.log(this.fecha)
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
