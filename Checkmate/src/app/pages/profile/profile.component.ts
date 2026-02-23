import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="page-container">
      <h1>Profile</h1>
      <div class="card">
        <p>Profile settings coming soon...</p>
      </div>
    </div>
  `,
  styles: [`
    .page-container { padding: 20px; }
    h1 { margin-bottom: 20px; color: #333; }
  `]
})
export class ProfileComponent {}
