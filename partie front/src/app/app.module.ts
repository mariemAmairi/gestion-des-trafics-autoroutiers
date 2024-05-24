import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
//import { AccidentComponent } from './pages/accident/accident.component';
//import { TraficComponent } from './pages/trafic/trafic.component';
//import { OperateurComponent } from './pages/operateur/operateur.component';
import { AddTraficComponent } from './pages/add-trafic/add-trafic.component';
import { AddAccidentComponent } from './pages/add-accident/add-accident.component';
import { UpdateTraficComponent } from './update-trafic/update-trafic.component';
import { UpdateAccidentComponent } from './update-accident/update-accident.component';
import { UpdateOperateurComponent } from './update-operateur/update-operateur.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    //AccidentComponent,
    //TraficComponent,
    //OperateurComponent,
    AddTraficComponent,
    AddAccidentComponent,
    UpdateTraficComponent,
    UpdateAccidentComponent,
    UpdateOperateurComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
