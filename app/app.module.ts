import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeSectionComponent,
    HeaderSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
