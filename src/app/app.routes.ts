import { Routes } from '@angular/router';
import { RestaurantsComponent } from './components/restaurants.component';
import { AboutComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';
import { CartPlaceholderComponent } from './components/cart-placeholder.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, title: 'Home - Presto' },
	{ path: 'restaurants', component: RestaurantsComponent, title: 'Restaurants - Presto' },
	{ path: 'dashboard', component: AboutComponent, title: 'Dashboard - Presto' },
	{ path: 'cart', component: CartPlaceholderComponent, title: 'Cart - Presto' },
	{ path: '**', redirectTo: '' }
];
