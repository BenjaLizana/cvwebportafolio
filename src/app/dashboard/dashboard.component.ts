import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  aboutme: string = "Hola, mi nombre es Benjamín Lizana, Ingeniero en Informática titulado de la Universidad Tecnologica de Chile INACAP, actualmente trabajando en Socius Chile junto a un equipo de desarrollo de software bajo metodología ágil scrum, con un año y dos meses de experiencia laboral, conocimientos en lenguajes de programación, herramientas y recursos para el desarrollo de aplicaciones haciendo uso de buenas practicas. Solución de errores en línea de código, analítico, honesto, responsable, proactivo, buen manejo y nivel de inglés, en búsqueda de más aprendizaje y desafíos para dar soluciones informáticas."
  personalInformation: string = "";
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Sobre mí', cols: 2, rows: 1 },
          { title: 'Información Personal', cols: 2, rows: 1 },
          { title: 'Experiencia Profesional', cols: 2, rows: 1 },
          // { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Sobre mí', cols: 2, rows: 1 },
        { title: 'Información Personal', cols: 1, rows: 1 },
        { title: 'Experiencia Profesional', cols: 1, rows: 1 },
        // { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  constructor(private breakpointObserver: BreakpointObserver) { }
}
