import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    LoginformComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ]
})
export class LoginModule { }
