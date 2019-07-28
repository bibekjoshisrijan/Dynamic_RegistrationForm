import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatNativeDateModule} from '@angular/material/core';
// import {MatInputModule} from '@angular/material/input'
// import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatSelectModule} from '@angular/material/select';
// import {MatRadioModule} from '@angular/material/radio';
import {MaterialModuleModule} from '../app/material-module/material-module.module'

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { BeekeeperComponent } from './beekeeper/beekeeper.component';
import { OtherComponent } from './other/other.component';


const routes:Routes = [
  {path:"",component:RegisterComponent},
  {path:"admin",component:AdminComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    AdminComponent,
    BeekeeperComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatSelectModule,
    // MatRadioModule,
    FormsModule,
    // MatDatepickerModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    // MatNativeDateModule,
    // MatExpansionModule,
    // MatInputModule,
    MaterialModuleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
