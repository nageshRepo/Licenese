import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLicenseComponent } from './Features/apply-license/apply-license.component';
import { LoginComponent } from './Features/login/login.component';
import { RenewComponent } from './Features/renew/renew.component';
import { TransferComponent } from './Features/transfer/transfer.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'apply',
    },
    {
        path: 'apply',
        component: ApplyLicenseComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'renew',
        component: RenewComponent
    },
    {
        path: 'transfer',
        component: TransferComponent
    },
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
