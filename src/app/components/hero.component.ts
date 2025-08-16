import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero section">
      <div class="container hero__wrap card">
        <div class="hero__text">
          <span class="tag">Quick Bites, Big Smiles</span>
          <h1 class="text-title">Feast Your Senses,<br/>Fast and Fresh</h1>
          <p class="text-muted">Order from top local restaurants with instant tracking and lightning-fast delivery.</p>
          <form class="hero__search" (submit)="$event.preventDefault()">
            <input class="hero__input" placeholder="Search food or restaurant"/>
            <button class="btn">Search</button>
          </form>
        </div>
        <div class="hero__image">
          <img alt="Happy customer holding pizza" src="assets/hero-girl.png" />
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .hero__wrap { display: grid; grid-template-columns: 1.1fr .9fr; gap: 24px; align-items: center; padding: 28px; background: linear-gradient(135deg, var(--light-yellow-color), #fff 60%); }
    .hero__text h1 { font-size: clamp(28px, 4.2vw, 46px); margin: 12px 0; }
    .hero__text p { margin: 8px 0 18px; }
    .hero__search { display: flex; gap: 10px; align-items: center; }
    .hero__input { flex: 1; padding: 12px 14px; border-radius: 12px; border: 2px solid var(--container-color); background: #fff; }
    .hero__image { position: relative; min-height: 260px; }
    .hero__image img { width: min(420px, 90%); margin-left: auto; filter: drop-shadow(0 18px 24px rgba(0,0,0,.12)); animation: slideInRight .5s ease both; }
    @media (max-width: 900px){ .hero__wrap { grid-template-columns: 1fr; } .hero__image img { margin-inline: auto; } }
    `
  ]
})
export class HeroComponent {}