import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TraficComponent } from 'src/app/pages/trafic/trafic.component';
import { AccidentComponent } from 'src/app/pages/accident/accident.component';
import { OperateurComponent } from 'src/app/pages/operateur/operateur.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {
        path: 'trafic',
        component: TraficComponent,
      },
      {
        path: 'accident',
        component: AccidentComponent,
      },
      {
        path: 'operateurs',
        component: OperateurComponent,
      },
      { path: 'register',
        component: RegisterComponent 
      }
      
];
