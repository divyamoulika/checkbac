import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';/

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgxCropperModule } from 'ngx-cropper';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule, Router} from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { CareersComponent } from './careers/careers.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ServerComponent } from './server/server.component';
import { ServerEditComponent } from './server-edit/server-edit.component';


import { MessageService } from './_services/message.service';
import {CommonService} from './_services/common.service';
import { BasicComponent } from './registration/basic/basic.component';
import { SchedhuleComponent } from './registration/schedhule/schedhule.component';
import { BacschedhuleComponent } from './registration/bacschedhule/bacschedhule.component';
import { MapsComponent } from './registration/maps/maps.component';
import { ManageusersComponent } from './registration/manageusers/manageusers.component';
import { SchedhuledComponent } from './registration/schedhuled/schedhuled.component';
import { ReportsComponent } from './registration/reports/reports.component';
import { MonitorassComponent } from './registration/monitorass/monitorass.component';
import { SettingsComponent } from './registration/settings/settings.component';
import { SupportComponent } from './registration/support/support.component';
import { LookupComponent } from './registration/manageusers/lookup/lookup.component';
import { AdduserComponent } from './registration/manageusers/adduser/adduser.component';
import { BillingComponent } from './registration/settings/billing/billing.component';
import { ManageadminsComponent } from './registration/settings/manageadmins/manageadmins.component';
import { InventoryComponent } from './registration/settings/inventory/inventory.component';
import { CustomreportsComponent } from './registration/support/customreports/customreports.component';
import { GeneratereportComponent } from './registration/support/generatereport/generatereport.component';
import { FaqComponent } from './registration/reports/faq/faq.component';
import { TicketsComponent } from './registration/reports/tickets/tickets.component';
import { SigninComponent } from './signin/signin.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    CareersComponent,
    HomeComponent,
    RegistrationComponent,
    ServerComponent,
    ServerEditComponent,
    BasicComponent,
    SchedhuleComponent,
    BacschedhuleComponent,
    MapsComponent,
    ManageusersComponent,
    SchedhuledComponent,
    ReportsComponent,
    MonitorassComponent,
    SettingsComponent,
    SupportComponent,
    LookupComponent,
    AdduserComponent,
    BillingComponent,
    ManageadminsComponent,
    InventoryComponent,
    CustomreportsComponent,
    GeneratereportComponent,
    FaqComponent,
    TicketsComponent,
    SigninComponent,
    LogoutComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    NgxCropperModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:'Activity', component:BasicComponent},
        {path:'Basicinfo', component:SchedhuleComponent},
        {path:'userinfo', component:BacschedhuleComponent},
        {path:'Maps', component:MapsComponent}
        {path:'support', component:SupportComponent},
        {path:'settings', component:SettingsComponent},
        {path:'monitorass', component:MonitorassComponent},
        {path:'Reports', component:ReportsComponent},
        {path:'Schedhule a Test', component:SchedhuledComponent},
        {path:'lookup', component: LookupComponent},
        {path:'adduser', component:AdduserComponent},
        {path:'billing', component:BillingComponent},
        {path:'manageadmins', component:ManageadminsComponent},
        {path:'inventory', component:InventoryComponent},
        {path:'customreports', component:CustomreportsComponent},
        {path:'generaterep', component:GeneratereportComponent},
        {path:'faq', component:FaqComponent},
        {path:'tickets', component:TicketsComponent},
        {path:'signin', component:SigninComponent},
        {path:'logout', component:LogoutComponent},
        {path:'Admin', component: AdminComponent},
        {path:'manageusers', component: ManageusersComponent},
        {path:'login', component: LoginComponent},
       
    ])
  ],
  providers: [MessageService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
