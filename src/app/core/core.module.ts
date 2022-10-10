import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header2Component } from './Components/header2/header2.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { CoreComponent } from './core.component';



@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    Header2Component
  ],
  exports: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    Header2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
