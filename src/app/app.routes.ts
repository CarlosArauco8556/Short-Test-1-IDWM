import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'home',   
        pathMatch: 'full',
        loadComponent: () => import('./characters/pages/home/home.component').then(m => m.HomeComponent)  
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
