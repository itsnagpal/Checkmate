import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ChecklistDetailComponent } from './pages/checklist-detail/checklist-detail.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ChecklistBuilderComponent } from './pages/checklist-builder/checklist-builder.component';
import { ChecklistTrackerComponent } from './pages/checklist-tracker/checklist-tracker.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { SecurityComplianceComponent } from './pages/security-compliance/security-compliance.component';

// New components
import { ReportsComponent } from './pages/reports/reports.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminChecklistsComponent } from './pages/admin/admin-checklists/admin-checklists.component';
import { AdminTasksComponent } from './pages/admin/admin-tasks/admin-tasks.component';
import { AdminRolesComponent } from './pages/admin/admin-roles/admin-roles.component';
import { AdminDepartmentsComponent } from './pages/admin/admin-departments/admin-departments.component';
import { AdminTemplatesComponent } from './pages/admin/admin-templates/admin-templates.component';
import { AdminWorkflowComponent } from './pages/admin/admin-workflow/admin-workflow.component';
import { AdminReportsComponent } from './pages/admin/admin-reports/admin-reports.component';
import { AdminNotificationsComponent } from './pages/admin/admin-notifications/admin-notifications.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { RolesPermissionsComponent } from './pages/roles-permissions/roles-permissions.component'

// Guards
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  // Public routes (no guards)
  { path: '', component: LandingPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  
  // Protected routes with AuthGuard
  { 
    path: 'dashboard', 
    component: UserDashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'checklists', 
    component: ChecklistDetailComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'checklist-detail', 
    component: ChecklistDetailComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'checklist-builder', 
    component: ChecklistBuilderComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'checklist-tracker', 
    component: ChecklistTrackerComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'reports', 
    component: ReportsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },

  // Admin routes with AdminGuard
  { 
    path: 'admin-dashboard', 
    component: AdminDashboardComponent,
    canActivate: [AdminGuard]
  },
  { 
    path: 'admin', 
    component: AdminDashboardComponent,
    canActivate: [AdminGuard]
  },
  { 
    path: 'admin/checklists', 
    component: AdminChecklistsComponent,
    canActivate: [AdminGuard]
  },
  { 
  path: 'admin/checklist-builder', 
  component: AdminChecklistsComponent,
  canActivate: [AdminGuard]
},
  { 
    path: 'admin/users', 
    component: UserManagementComponent,
    canActivate: [AdminGuard]
  },
  { 
    path: 'admin/roles', 
    component: AdminRolesComponent,
    canActivate: [AdminGuard]
  },
  
  { 
  path: 'admin/checklist-tracker', 
  component: ChecklistTrackerComponent,
  canActivate: [AdminGuard]
},
  { 
    path: 'admin/templates', 
    component: AdminTemplatesComponent,
    canActivate: [AdminGuard]
  },
  { 
    path: 'admin/workflow', 
    component: AdminWorkflowComponent,
    canActivate: [AdminGuard]
  },
  { 
    path: 'admin/reports', 
    component: AdminReportsComponent,
    canActivate: [AdminGuard]
  },
  { 
    path: 'admin/security', 
    component: SecurityComplianceComponent,
    canActivate: [AdminGuard]
  },
  { 
    path: 'admin/notifications', 
    component: AdminNotificationsComponent,
    canActivate: [AdminGuard]
  },
  { 
    path: 'admin/profile', 
    component: AdminProfileComponent,
    canActivate: [AdminGuard]
  },
  { 
    path: 'admin/roles-permissions', // Or whatever your sidebar link is using
    component: RolesPermissionsComponent // <-- 2. Change this to our new component!
  },

  // Wildcard route - must be last
  { path: '**', component: NotFoundComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
