import { Routes } from '@angular/router';

import { DailymotionComponent } from './dailymotion/dailymotion.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'rest', component: DailymotionComponent, pathMatch: 'full' },
    { path: '**', component: NotfoundComponent, pathMatch: 'full' }
];
