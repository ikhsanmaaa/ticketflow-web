import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { PortalLayout } from './layouts/portal-layout/portal-layout';

export const routes: Routes = [
  {
    path: '',

    component: PortalLayout,

    children: [
      {
        path: '',

        component: Dashboard,
      },
    ],
  },
];
