import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  title = 'portafolioTrabajo';
  prueba = 'Próximo portafolio';

  num1 = 1;
  num2 = 2;
  

}
