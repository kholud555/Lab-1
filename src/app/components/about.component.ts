import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="about section">
      <div class="container grid" style="grid-template-columns: 1fr; gap: 24px;">
        <div class="card" style="padding: 24px;">
          <h2 class="text-title" style="margin:0 0 12px">Know more about us!</h2>
          <div class="tabs">
            <button class="tab" [class.active]="tab()=== 'why'" (click)="tab.set('why')">Why Presto?</button>
            <button class="tab" [class.active]="tab()=== 'benefits'" (click)="tab.set('benefits')">Benefits</button>
            <button class="tab" [class.active]="tab()=== 'support'" (click)="tab.set('support')">Support</button>
            <button class="tab" [class.active]="tab()=== 'faq'" (click)="tab.set('faq')">FAQ</button>
          </div>
          <div class="accordion">
            <details open>
              <summary>How do I place an order?</summary>
              <p>Browse restaurants, add items to your cart, and check out. Real-time tracking keeps you updated until your food arrives hot.</p>
            </details>
            <details>
              <summary>What areas do you cover?</summary>
              <p>We partner with top local restaurants and couriers across the city, constantly expanding to new neighborhoods.</p>
            </details>
            <details>
              <summary>How fast is delivery?</summary>
              <p>Average delivery time is 25–35 minutes depending on distance and kitchen load. You can schedule orders ahead for precise timing.</p>
            </details>
          </div>
          <div class="features grid" style="grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); margin-top: 20px;">
            <div class="card" *ngFor="let f of features" style="padding: 16px; text-align:center;">
              <div class="tag" style="justify-content:center; margin-bottom: 10px;">{{f.tag}}</div>
              <h3 style="margin:6px 0">{{f.title}}</h3>
              <p class="text-muted" style="margin:0">{{f.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
    .tab { padding: 10px 14px; border-radius: 999px; border: 1px solid var(--container-color); background: #fff; color: var(--text-color); font-weight: 600; }
    .tab.active, .tab:hover { background: var(--light-yellow-color); color: var(--first-color); border-color: var(--first-color); }
    .accordion details { border: 1px solid var(--container-color); border-radius: 12px; padding: 10px 14px; background: #fff; }
    .accordion details + details { margin-top: 10px; }
    .accordion summary { cursor: pointer; font-weight: 700; color: var(--title-color); }
    `
  ]
})
export class AboutComponent {
  features = [
    { tag: 'Zero Fees', title: 'No hidden charges', desc: 'Upfront pricing with transparent taxes and delivery costs.' },
    { tag: 'Live Tracking', title: 'Track every step', desc: 'From kitchen to your door, follow your order in real time.' },
    { tag: 'Freshness', title: 'Hot and tasty', desc: 'Partner kitchens seal freshness so your meals arrive perfect.' },
    { tag: 'Support 24/7', title: 'We are here', desc: 'Message support anytime for fast, friendly help.' }
  ];
  tab = signal<'why' | 'benefits' | 'support' | 'faq'>('why');
}