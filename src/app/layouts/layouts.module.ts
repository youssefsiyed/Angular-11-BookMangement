import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LayoutRoutingModule } from './layouts-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [ HeaderComponent,HomeComponent,FooterComponent,ErrorComponent ],
  exports:      [ HeaderComponent,HomeComponent,FooterComponent,ErrorComponent ]
})
export class LayoutsModule { }