import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { Enviroment } from '../enviroments/enviroment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    provideFirebaseApp(() => initializeApp(Enviroment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
