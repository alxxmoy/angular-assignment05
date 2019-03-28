import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardKeschaeComponent } from './card-keschae/card-keschae.component';
import { SelectedStudentComponent } from './selected-student/selected-student.component';
import { FooterComponent } from './footer/footer.component';
import { CardLdpigmaComponent } from './card-ldpigma/card-ldpigma.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardKeschaeComponent,
    SelectedStudentComponent,
    FooterComponent,
    CardLdpigmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
