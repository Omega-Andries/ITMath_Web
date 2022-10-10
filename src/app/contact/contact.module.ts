import { ContactformComponent } from './Components/contactform/contactform.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ContactComponent } from './contact.component';
import { OmegaComponent } from './Components/omega/omega.component';



@NgModule({
  declarations: [
    ContactComponent,
    OmegaComponent,
    ContactformComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    
  ]
})
export class ContactModule { }
