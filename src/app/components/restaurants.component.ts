import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="restaurants section">
      <div class="container">
        <div class="card" style="padding: 24px;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;">
            <h2 class="text-title" style="margin:0">Ordering is more <span style="color:var(--first-color)">Easier & instant</span></h2>
            <a class="btn btn-outline" href="#" (mouseenter)="hover=true" (mouseleave)="hover=false" (click)="$event.preventDefault()">
              <span>Restaurants</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path [attr.d]="hover ? 'M14 5l7 7-7 7M3 12h18' : 'M13 5l7 7-7 7M3 12h16'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); margin-top: 16px;">
            <div class="card" *ngFor="let i of [1,2,3,4,5,6]" style="padding:14px;">
              <div style="height:120px;border-radius:14px;background:var(--container-color);"></div>
              <h3 style="margin:12px 0 4px;">Tasty Place {{i}}</h3>
              <p class="text-muted" style="margin:0">Fresh meals and quick delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class RestaurantsComponent { hover = false; }