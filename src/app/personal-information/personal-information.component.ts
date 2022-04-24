import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  addressForm = this.fb.group({
    correo: 'benjamin.lizanam@hotmail.com',
    number:'+56972832371' ,
    city: 'Santiago - Chile',
    linkedIn: 'https://www.linkedin.com/in/benjamin-esteban-lizana-miranda367b241b6/'
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
