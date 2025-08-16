import { Component } from '@angular/core';

@Component({
	selector: 'app-cart-placeholder',
	standalone: true,
	template: `
		<section class="section">
			<div class="container card" style="padding: 24px; text-align:center;">
				<h1 class="text-title" style="margin:0 0 8px;">Cart</h1>
				<p class="text-muted" style="margin:0;">Cart functionality will be implemented later.</p>
			</div>
		</section>
	`
})
export class CartPlaceholderComponent {}