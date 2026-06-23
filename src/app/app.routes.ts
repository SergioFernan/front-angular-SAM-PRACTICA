import { Routes } from '@angular/router';

export const routes: Routes = [
    //todas con carga perezosa lazy loading
    { path: 'home', loadComponent: () => import('./features/home/home').then((m) => m.Home) }, // import es una funcion que carga un modulo tiene un callback que retorna la ruta del modulo
    { path: 'checkout', loadComponent: () => import('./features/checkout/checkout').then((m) => m.Checkout) }, // iden si se puede crear un archivo barrel para importar todo de una vez
    { path: 'product-details', loadComponent: () => import('./features/product-details/product-details').then((m) => m.ProductDetails) }, // iden si se puede crear un archivo barrel para importar todo de una vez
    { path: 'login', loadComponent: () => import('./features/login/login').then((m) => m.Login) }, // iden si se puede crear un archivo barrel para importar todo de una vez
    { path: 'register', loadComponent: () => import('./features/register/register').then((m) => m.Register) }, // iden si se puede crear un archivo barrel para importar todo de una vez
    { path: '404', loadComponent: () => import('./features/page-not-found/page-not-found').then((m) => m.PageNotFound) }, // iden si se puede crear un archivo barrel para importar todo de una vez
    { path: ``, redirectTo: `home`, pathMatch: `full` },//siempre redirige a home
    { path: '**', redirectTo: `404`, pathMatch: `full` }// esta linea es para cuando el usuario meta una ruta que no existe, lo redireccione a la pagina de no encontrado
];
