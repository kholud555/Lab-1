import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">
          <img src="assets/logo.svg" alt="Presto"/>
          <p class="text-muted">Ordering made delightful. Fresh meals delivered fast with real-time tracking.</p>
        </div>
        <nav class="footer__col">
          <h4>Explore</h4>
          <a routerLink="/">Home</a>
          <a routerLink="/restaurants">Restaurants</a>
          <a routerLink="/dashboard">Dashboard</a>
        </nav>
        <nav class="footer__col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </nav>
        <nav class="footer__col">
          <h4>Help</h4>
          <a href="#">Support</a>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div class="footer__bar">
        <div class="container" style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;">
          <span class="text-muted">© {{year}} Presto. All rights reserved.</span>
          <div style="display:flex; gap:14px;">
            <a href="#" aria-label="Facebook" class="social">f</a>
            <a href="#" aria-label="Twitter" class="social">x</a>
            <a href="#" aria-label="Instagram" class="social">ig</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
    .footer { background: var(--light-yellow-color); margin-top: 24px; }
    .footer__grid { display: grid; grid-template-columns: 1.2fr repeat(3, 1fr); gap: 24px; padding: 36px 0; }
    .footer__brand img { height: 48px; margin-bottom: 10px; }
    .footer__col { display: grid; gap: 10px; }
    .footer__col h4 { margin: 0 0 6px; color: var(--title-color); }
    .footer__col a { color: var(--text-color); }
    .footer__col a:hover { color: var(--first-color); }
    .footer__bar { border-top: 1px solid var(--container-color); padding: 12px 0; }
    .social { display:inline-flex; width:32px; height:32px; align-items:center; justify-content:center; background:#fff; border-radius:10px; box-shadow: var(--shadow-sm); }
    @media (max-width: 860px){ .footer__grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 520px){ .footer__grid { grid-template-columns: 1fr; } }
    `
  ]
})
export class FooterComponent { year = new Date().getFullYear(); }