import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Features/login/login.component';
import { FormsModule } from '@angular/forms';
import { AddressComponent } from './Features/address/address.component';
import { AppRoutingModule } from './app-routing.module';
import { ApplyLicenseComponent } from './Features/apply-license/apply-license.component';
import { PersonDetailsComponent } from './Features/person-details/person-details.component';
import { DocumentDetailsComponent } from './Features/document-details/document-details.component';
import { RtoDetailsComponent } from './Features/rto-details/rto-details.component';
import { DlDetailsComponent } from './Features/dl-details/dl-details.component';
import { RenewComponent } from './Features/renew/renew.component';
import { TransferComponent } from './Features/transfer/transfer.component';
import { TransferorComponent } from './Features/transfer/transferor/transferor.component';
import { VehicleComponent } from './Features/transfer/vehicle/vehicle.component';
import { DocumentComponent } from './Features/transfer/document/document.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddressComponent,
    ApplyLicenseComponent,
    PersonDetailsComponent,
    DocumentDetailsComponent,
    RtoDetailsComponent,
    DlDetailsComponent,
    RenewComponent,
    TransferComponent,
    TransferorComponent,
    VehicleComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
