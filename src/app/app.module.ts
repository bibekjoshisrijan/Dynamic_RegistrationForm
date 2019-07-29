import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MaterialModuleModule} from '../app/material-module/material-module.module'
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { BeekeeperComponent } from './beekeeper/beekeeper.component';
import { OtherComponent } from './other/other.component';
import {StaticService} from '../app/services/static.service'
import {StorageService} from '../app/services/storage.service';
import { RenewComponent } from './renew/renew.component';
import { ExpanderComponent } from './expander/expander.component';
import { BexpanderComponent } from './bexpander/bexpander.component';
import { HomeComponent } from './home/home.component'


const routes:Routes = [
  {path:"",component:HomeComponent},
  {path:"admin",component:AdminComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    AdminComponent,
    BeekeeperComponent,
    OtherComponent,
    RenewComponent,
    ExpanderComponent,
    BexpanderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StaticService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
