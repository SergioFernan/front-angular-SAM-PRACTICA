import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './shared/components/header/header'; // Importación del header
import { Footer } from './shared/components/footer/footer'; // Importación del footer


@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet], // Importación de los componentes en el decorador
  templateUrl: './app.html', // Template del componente
  styleUrl: './app.css' // Estilos del componente
})
export class App {
  protected readonly title = signal('FrontEnd');
}
