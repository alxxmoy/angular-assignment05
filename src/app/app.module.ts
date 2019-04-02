import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardKeschaeComponent } from './card-keschae/card-keschae.component';
import { CardAkruftComponent } from './card-akruft/card-akruft.component';
import { SelectedStudentComponent } from './selected-student/selected-student.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardKeschaeComponent,
    CardAkruftComponent,
    SelectedStudentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
