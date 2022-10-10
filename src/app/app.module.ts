import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { CoreComponent } from './core/core.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactformComponent } from './contact/Components/contactform/contactform.component';
import { OmegaComponent } from './contact/Components/omega/omega.component';
import { FooterComponent } from './core/Components/footer/footer.component';
import { HeaderComponent } from './core/Components/header/header.component';
import { Header2Component } from './core/Components/header2/header2.component';
import { AboutComponent } from './home/Components/about/about.component';
import { AppsuggestionComponent } from './home/Components/appsuggestion/appsuggestion.component';
import { QuickmathComponent } from './home/Components/quickmath/quickmath.component';
import { TitleComponent } from './home/Components/title/title.component';
import { GcdComponent } from './home/Components/quickmath/gcd/gcd.component';
import { LcmComponent } from './home/Components/quickmath/lcm/lcm.component';
import { ModComponent } from './home/Components/quickmath/mod/mod.component';
import { GroupComponent } from './home/Components/quickmath/group/group.component';
import { SubgroupComponent } from './home/Components/quickmath/subgroup/subgroup.component';
import { OrderComponent } from './home/Components/quickmath/order/order.component';
import { LoginformComponent } from './login/loginform/loginform.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { ContactModule } from './contact/contact.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    HomeModule,
    ContactModule,
    LoginModule,
    HttpClientModule 
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
