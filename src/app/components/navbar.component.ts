import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="nav">
      <div class="container nav__bar">
        <a class="nav__logo" routerLink="/"> 
          <img src="assets/logo.svg" alt="Presto" />
        </a>
        <button class="nav__toggle" (click)="toggleMenu()" [attr.aria-expanded]="isOpen()">
          <span class="sr-only">Toggle menu</span>
          <div class="burger" [class.open]="isOpen()">
            <span></span><span></span><span></span>
          </div>
        </button>
        <ul class="nav__links" [class.open]="isOpen()">
          <li><a routerLink="/" routerLinkActive="active" (click)="closeMenu()">Home</a></li>
          <li><a routerLink="/restaurants" routerLinkActive="active" (click)="closeMenu()">Restaurants</a></li>
          <li><a routerLink="/dashboard" routerLinkActive="active" (click)="closeMenu()">Dashboard</a></li>
          <li class="nav__auth">
            <a class="btn btn-outline sign-in" href="#" (click)="$event.preventDefault()">Sign in</a>
            <a class="btn sign-up" href="#" (click)="$event.preventDefault()">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
    `
    .nav { background: #fff; position: sticky; top: 62px; z-index: 25; box-shadow: var(--shadow-sm); }
    .nav__bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; }
    .nav__logo img { height: 36px; }
    .nav__toggle { display: none; background: transparent; border: 0; }
    .nav__links { display: flex; align-items: center; gap: 20px; list-style: none; margin: 0; padding: 0; }
    .nav__links a { padding: 10px 8px; border-radius: 10px; color: var(--text-color); font-weight: 600; transition: color .2s ease, background .2s ease; }
    .nav__links a:hover, .nav__links a.active { color: var(--first-color); background: var(--light-yellow-color); }
    .nav__auth { display: flex; gap: 10px; margin-left: 8px; }
    /* Hover interactions */
    .sign-in:hover { background: var(--first-color); color: #fff; border-color: var(--first-color); }
    .sign-up:hover { background: transparent; color: var(--first-color); border: 2px solid var(--first-color); }
    
    /* Burger */
    .burger { position: relative; width: 28px; height: 20px; display: grid; align-items: center; }
    .burger span { height: 2px; background: var(--title-color); border-radius: 2px; transition: transform .25s ease, opacity .2s ease; display: block; }
    .burger.open span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
    .burger.open span:nth-child(2) { opacity: 0; }
    .burger.open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

    /* Mobile menu full-screen */
    @media (max-width: 820px) {
      .nav__toggle { display: inline-flex; }
      .nav__links { position: fixed; inset: 0; background: rgba(0,0,0,.4); display: block; padding: 0; margin: 0; pointer-events: none; opacity: 0; transition: opacity .2s ease; }
      .nav__links.open { pointer-events: auto; opacity: 1; }
      .nav__links li { background: #fff; padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,.05); }
      .nav__links li:first-child { margin-top: 72px; border-top-left-radius: 16px; border-top-right-radius: 16px; }
      .nav__links li:last-child { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; }
      .nav__links.open li { animation: fadeInUp .28s ease both; }
      .nav__links.open li:nth-child(1){ animation-delay: .02s; }
      .nav__links.open li:nth-child(2){ animation-delay: .05s; }
      .nav__links.open li:nth-child(3){ animation-delay: .08s; }
      .nav__links.open li:nth-child(4){ animation-delay: .11s; }
      .nav__links a { display: block; font-size: 18px; padding: 14px 24px; }
      .nav__auth { padding: 12px 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    }

    @media (min-width: 821px) {
      .nav__links { gap: 12px; }
    }

    /* a11y */
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 1px, 1px); white-space: nowrap; border: 0; }
    `
  ]
})
export class NavbarComponent {
  isOpen = signal(false);

  toggleMenu() { this.isOpen.update(v => !v); }
  closeMenu() { this.isOpen.set(false); }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 820 && this.isOpen()) this.isOpen.set(false);
  }
}