import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent],
  template: `
    <app-header />
    <app-navbar />

    <main>
      <router-outlet />
    </main>

    <app-footer />
  `,
  styles: []
})
export class App {
  protected readonly title = signal('presto');
}
