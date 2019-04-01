import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardKeschaeComponent } from './card-keschae/card-keschae.component';
import { SelectedStudentComponent } from './selected-student/selected-student.component';
import { FooterComponent } from './footer/footer.component';
import { CardJamcin2Component } from './card-jamcin2/card-jamcin2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardKeschaeComponent,
    SelectedStudentComponent,
    FooterComponent,
    CardJamcin2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
