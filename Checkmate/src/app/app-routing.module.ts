import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ChecklistDetailComponent } from './pages/checklist-detail/checklist-detail.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

import { ChecklistBuilderComponent } from './pages/checklist-builder/checklist-builder.component';
import { ChecklistTrackerComponent } from './pages/checklist-tracker/checklist-tracker.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'dashboard', component: UserDashboardComponent },

  { path: 'checklists', component: ChecklistDetailComponent },
  { path: 'checklist-detail', component: ChecklistDetailComponent },

  { path: 'checklist-builder', component: ChecklistBuilderComponent },
  { path: 'checklist-tracker', component: ChecklistTrackerComponent },

  { path: 'reports', component: UserDashboardComponent },
  { path: 'admin', component: UserDashboardComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
