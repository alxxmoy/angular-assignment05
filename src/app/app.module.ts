import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardKeschaeComponent } from './card-keschae/card-keschae.component';
import { CardEjzumbaComponent } from './card-ejzumba/card-ejzumba.component';
import { SelectedStudentComponent } from './selected-student/selected-student.component';
import { FooterComponent } from './footer/footer.component';

// import { CardKeschaeComponent } from './card-jfturle/card-jfturle.component';
// import { CardKeschaeComponent } from './card-akruft/card-akruft.component';
// import { CardKeschaeComponent } from './card-jamcin2/card-jamcin2.component';
// import { CardKeschaeComponent } from './card-amoy/card-amoy.component';
// import { CardKeschaeComponent } from './card-ldpigma/card-ldpigma.component';
// import { CardKeschaeComponent } from './card-ejzuma/card-ejzumba.component';

// should end up with 6 student component cards being imported here
// and 6 more in NgModule
// I'm going to trust Git merge for these

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SelectedStudentComponent,
    FooterComponent,
    // CardJfturleComponent,
    // CardAkruftComponent,
    // CardJamcin2Component,
    // CardAmoyComponent,
    // CardLdpigmaComponent,
    CardEjzumbaComponent,
    CardKeschaeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
