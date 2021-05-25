import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UserLoginComponent } from './components/user-login/user-login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [ UserLoginComponent ],
  exports:      [ UserLoginComponent ]
})
export class UsersModule { }