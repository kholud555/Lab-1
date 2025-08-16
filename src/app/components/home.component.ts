import { Component } from '@angular/core';
import { HeroComponent } from './hero.component';
import { RestaurantsComponent } from './restaurants.component';
import { AboutComponent } from './about.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [HeroComponent, RestaurantsComponent, AboutComponent],
	template: `
		<app-hero />
		<app-restaurants />
		<app-about />
	`
})
export class HomeComponent {}