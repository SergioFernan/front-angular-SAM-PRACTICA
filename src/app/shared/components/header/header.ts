// Importa el decorador Component desde el núcleo de Angular para poder definir componentes
import { Component } from '@angular/core';
// Importa las directivas RouterLink y RouterLinkActive de Angular para manejar los enlaces de navegación y sus clases activas
import { RouterLink, RouterLinkActive } from '@angular/router';

// Define la configuración y metadatos del componente usando el decorador @Component
@Component({
  // Define el nombre del selector HTML personalizado para usar el componente (ej. <app-header></app-header>)
  selector: 'app-header',
  // Declara las dependencias externas (componentes o directivas) que se utilizarán en la plantilla HTML
  imports: [RouterLink, RouterLinkActive],
  // Especifica la ruta del archivo HTML que define la estructura visual del componente
  templateUrl: './header.html',
  // Especifica la ruta del archivo CSS que contiene los estilos aplicados exclusivamente a este componente
  styleUrl: './header.css',
})
// Exporta la clase 'Header' para que pueda ser importada e integrada en otras partes de la aplicación
export class Header { }

