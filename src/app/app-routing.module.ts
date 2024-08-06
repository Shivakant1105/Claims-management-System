import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { ClaimInputComponent } from './claim-input/claim-input.component';
import { ClaimOutputComponent } from './claim-output/claim-output.component';
import { ErrormsgComponent } from './errormsg/errormsg.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { MemberModuleComponent } from './member-module/member-module.component';
import { Memberdet1Component } from './memberdet1/memberdet1.component';
import { MemberdetailsModuleComponent } from './memberdetails-module/memberdetails-module.component';
import { SubmitInputComponent } from './submit-input/submit-input.component';
import { SubmitOutputComponent } from './submit-output/submit-output.component';

import { ClaimListComponent } from './claim-list/claim-list.component';
import { ClaimIdDetailComponent } from './claim-id-detail/claim-id-detail.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { PolicyDataComponent } from './policy-data/policy-data.component';
import { AddproviderComponent } from './addprovider/addprovider.component';

const routes: Routes = [
  // {path:'usersignup' , component: UserSignupComponent},
  { path: 'loginModule', component: LoginModuleComponent },
  { path: 'userSignup', component: UserSignupComponent },
  { path: 'memberModule', component: MemberModuleComponent ,   },
  {
    path: 'memberdetailsModule',
    component: MemberdetailsModuleComponent,
    
  },
  { path: 'memberdet1Module', component: Memberdet1Component },
  {
    path: 'claimInput',
    component: ClaimInputComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'claimOutput', component: ClaimOutputComponent },
  {
    path: 'submitInput',
    component: SubmitInputComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'submitOutput', component: SubmitOutputComponent },
  {
    path: 'claimlist',
    component: ClaimListComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'claimiddeatils',
    component: ClaimIdDetailComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'policyData', component: PolicyDataComponent,   },
  { path: 'providerdata', component: AddproviderComponent, },
  { path: 'error', component: ErrormsgComponent },
  { path: '', redirectTo: '/loginModule', pathMatch: 'full' },
  { path: '**', component: ErrormsgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginModuleComponent,
  MemberModuleComponent,
  MemberdetailsModuleComponent,
  Memberdet1Component,
  ClaimInputComponent,
  ClaimOutputComponent,
  SubmitInputComponent,
];
