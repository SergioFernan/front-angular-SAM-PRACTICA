import { Routes } from '@angular/router';

export const routes: Routes = [
    //todas con carga perezosa lazy loading
    { path: 'home', loadComponent: () => import('./features/home/home') }, // import es una funcion que carga un modulo ya no tiene callback ya que se usa ES6 que retorna directamente el modulo
    { path: 'checkout', loadComponent: () => import('./features/checkout/checkout') }, // import es una funcion que carga un modulo ya no tiene callback ya que se usa ES6 que retorna directamente el modulo
    { path: 'product-details', loadComponent: () => import('./features/product-details/product-details') }, // import es una funcion que carga un modulo ya no tiene callback ya que se usa ES6 que retorna directamente el modulo
    { path: 'login', loadComponent: () => import('./features/login/login') }, // import es una funcion que carga un modulo ya no tiene callback ya que se usa ES6 que retorna directamente el modulo
    { path: 'register', loadComponent: () => import('./features/register/register') }, // import es una funcion que carga un modulo ya no tiene callback ya que se usa ES6 que retorna directamente el modulo
    { path: '404', loadComponent: () => import('./features/page-not-found/page-not-found') }, // import es una funcion que carga un modulo ya no tiene callback ya que se usa ES6 que retorna directamente el modulo
    { path: ``, redirectTo: `home`, pathMatch: `full` },//siempre redirige a home
    { path: '**', redirectTo: `404`, pathMatch: `full` }// esta linea es para cuando el usuario meta una ruta que no existe, lo redireccione a la pagina de no encontrado
];
