import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MemberdetailsModuleComponent } from './memberdetails-module/memberdetails-module.component';
import { Memberdet1Component } from './memberdet1/memberdet1.component';
import { ClaimInputComponent } from './claim-input/claim-input.component';
import { ClaimOutputComponent } from './claim-output/claim-output.component';
import { SubmitInputComponent } from './submit-input/submit-input.component';
import { SubmitOutputComponent } from './submit-output/submit-output.component';
import { InterceptorServiceService } from './interceptor-service.service';
import { AuthGuardGuard } from './auth-guard.guard';
import { ErrormsgComponent } from './errormsg/errormsg.component';

import { ClaimListComponent } from './claim-list/claim-list.component';
import { ClaimIdDetailComponent } from './claim-id-detail/claim-id-detail.component';

import { UserSignupComponent } from './user-signup/user-signup.component';
import { PolicyDataComponent } from './policy-data/policy-data.component';
import { AddproviderComponent } from './addprovider/addprovider.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MemberdetailsModuleComponent,
    Memberdet1Component,
    ClaimInputComponent,
    ClaimOutputComponent,
    SubmitInputComponent,
    SubmitOutputComponent,
    ErrormsgComponent,

    ClaimListComponent,
    ClaimIdDetailComponent,
 
    UserSignupComponent,
      PolicyDataComponent,
       AddproviderComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorServiceService,
      multi: true,
    },
    AuthGuardGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
