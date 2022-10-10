import { SubgroupComponent } from './Components/quickmath/subgroup/subgroup.component';
import { GroupComponent } from './Components/quickmath/group/group.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TitleComponent } from './Components/title/title.component';
import { AppsuggestionComponent } from './Components/appsuggestion/appsuggestion.component';
import { AboutComponent } from './Components/about/about.component';
import { LcmComponent } from './Components/quickmath/lcm/lcm.component';
import { QuickmathComponent } from './Components/quickmath/quickmath.component';
import { GcdComponent } from './Components/quickmath/gcd/gcd.component';
import { ModComponent } from './Components/quickmath/mod/mod.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { OrderComponent } from './Components/quickmath/order/order.component';



@NgModule({
  declarations: [  
    HomeComponent,
    TitleComponent,
    AboutComponent,
    AppsuggestionComponent,
    QuickmathComponent,
    LcmComponent,
    ModComponent,
    GcdComponent,
    GroupComponent,
    SubgroupComponent,
    OrderComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    FormsModule
  ]
})
export class HomeModule { }
