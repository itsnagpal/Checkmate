import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent },

  // Temporary routes (you can replace components later)
  { path: 'checklists', component: UserDashboardComponent },
  { path: 'reports', component: UserDashboardComponent },
  { path: 'admin', component: UserDashboardComponent },

  // Optional: redirect unknown routes to dashboard
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

