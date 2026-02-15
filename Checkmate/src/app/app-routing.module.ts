import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ChecklistDetailComponent } from './pages/checklist-detail/checklist-detail.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent },

  
  { path: 'checklists', component: UserDashboardComponent },
  { path: 'reports', component: UserDashboardComponent },
  { path: 'admin', component: UserDashboardComponent },
  { path: 'checklist-detail', component: ChecklistDetailComponent },
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

