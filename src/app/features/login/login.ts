import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  selectedTab: 'individual' | 'business' = 'individual';

  setTab(tab: 'individual' | 'business') {
    this.selectedTab = tab;
  }
}
