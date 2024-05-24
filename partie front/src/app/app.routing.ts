import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
//import { TraficComponent } from './pages/trafic/trafic.component';
//import { AccidentComponent } from './pages/accident/accident.component';

import { AddTraficComponent } from './pages/add-trafic/add-trafic.component';
import { AddAccidentComponent } from './pages/add-accident/add-accident.component';
import { UpdateTraficComponent } from './update-trafic/update-trafic.component';
import { UpdateAccidentComponent } from './update-accident/update-accident.component';
import { UpdateOperateurComponent } from './update-operateur/update-operateur.component';
//import { OperateurComponent } from './pages/operateur/operateur.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  
  
  {
    path: 'addtrafic',
    component: AddTraficComponent,
  },
  {
    path: 'addaccident',
    component: AddAccidentComponent,
  },
  {
    path: 'update-trafic/:id',
    component: UpdateTraficComponent,
   
  },
  {
    path: 'update-accident/:id',
    component: UpdateAccidentComponent,
   
  },
  {
    path: 'update-operateur/:id',
    component: UpdateOperateurComponent,
   
  },
  
  
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
