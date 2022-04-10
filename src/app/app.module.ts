import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryContextStorageModule } from '@employees';
import { NavbarComponentModule } from 'projects/navigation/src/lib/adapters/primary/ui/navbar.component-module';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarComponentModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firestoreConfig),
    InMemoryContextStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
