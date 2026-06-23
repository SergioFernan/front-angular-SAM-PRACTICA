import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login { // importante usar default para el lazy loading que se implemento en app.routes.ts
  selectedTab: 'individual' | 'business' = 'individual';

  setTab(tab: 'individual' | 'business') {
    this.selectedTab = tab;
  }
}
