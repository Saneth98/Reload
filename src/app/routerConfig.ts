import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import {DriverComponent} from './components/driver/driver.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ActionComponent} from './components/action/action.component';
import {DriverAdminComponent} from "./components/driver-admin/driver-admin.component";
import {StockAdminComponent} from "./components/stock-admin/stock-admin.component";
import {InformationComponent} from "./components/information/information.component";


const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: ActionComponent, pathMatch: 'full'},
  {
    path: 'admin/panel', component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/signUp', component: SignUpComponent
  },
  {
    path: 'driver', component: DriverComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/driver', component: DriverAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/stocks', component: StockAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/data', component: InformationComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'users', component: UsersComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'control', component: ControlComponent,
  //   canLoad: [AuthGuard],
  //   canActivate: [AuthGuard],
  //   data: {
  //     roles: [
  //       Role.Admin,
  //     ]
  //   },
  //   children: [
  //     { path: 'users', component: UsersComponent }
  //   ]
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
