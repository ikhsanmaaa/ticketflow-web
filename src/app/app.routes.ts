import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PortalLayoutComponent } from './layouts/portal-layout/portal-layout.component';

export const routes: Routes = [
  {
    path: '',

    component: PortalLayoutComponent,

    children: [
      {
        path: '',

        component: DashboardComponent,
      },
      {
        path: 'token/:token',
        component: DashboardComponent,
      },
    ],
  },
];
