import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="header">
      <div class="container header__inner">
        <a routerLink="/" class="header__brand" aria-label="Presto home">
          <img src="assets/logo.svg" alt="Presto" class="header__logo" />
          <span class="header__brand-text">Presto</span>
        </a>
        <div class="header__text">Feast Your Senses, Fast and Fresh</div>
        <a routerLink="/cart" class="btn header__cart" aria-label="Cart">
          <span>Cart</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 3h2l.4 2M7 13h10l3-8H5.4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="9" cy="21" r="1.8" fill="currentColor"/>
            <circle cx="18" cy="21" r="1.8" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </header>
  `,
  styles: [
    `
    .header { position: sticky; top: 0; z-index: 30; background: var(--light-yellow-color); box-shadow: var(--shadow-sm); }
    .header__inner { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 16px; padding: 10px 0; }
    .header__brand { display: inline-flex; align-items: center; gap: 10px; }
    .header__logo { width: 46px; height: auto; }
    .header__brand-text { font-weight: 800; font-size: 20px; color: var(--first-color); font-family: Georgia, 'Times New Roman', serif; letter-spacing: .5px; }
    .header__text { justify-self: center; text-align: center; font-weight: 600; color: var(--text-color); }
    .header__cart { justify-self: end; display: inline-flex; align-items: center; gap: 8px; }
    @media (max-width: 768px){ .header__text { display:none; } }
    `
  ]
})
export class HeaderComponent {}