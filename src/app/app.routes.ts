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
      {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
      },
    ],
  },
];
