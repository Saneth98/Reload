import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import {DriverComponent} from './components/driver/driver.component';
import {AppRoutingModule} from './routerConfig';
import {ErrorComponent} from './components/error/error.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
import {ActionComponent} from './components/action/action.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlifeFileToBase64Module} from 'alife-file-to-base64';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModalModule, NgbModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { DriverAdminComponent } from './components/driver-admin/driver-admin.component';
import { StockAdminComponent } from './components/stock-admin/stock-admin.component';
import {FilterPipe} from './filter.pipe';
import { InformationComponent } from './components/information/information.component';
import { ModalContentComponent } from './components/stock-admin/modal-content/modal-content.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DriverComponent,
    ErrorComponent,
    SignUpComponent,
    ActionComponent,
    DriverAdminComponent,
    StockAdminComponent,
    FilterPipe,
    InformationComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlifeFileToBase64Module,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    NgbModalModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
