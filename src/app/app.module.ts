import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SummaryComponent } from './content-area/summary/summary.component';
import { BoardComponent } from './content-area/board/board.component';
import { AddTaskComponent } from './content-area/add-task/add-task.component';
import { ContactsComponent } from './content-area/contacts/contacts.component';
import { LogoAnimationComponent } from './nav-menu/logo-animation/logo-animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavComponent } from './nav-menu/nav/nav.component';
import { ChatComponent } from './content-area/chat/chat.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { DateComponent } from './nav-menu/date/date.component';
import { ChatRoomsComponent } from './content-area/chat/chat-rooms/chat-rooms.component';
import { LoginComponent } from './access/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LogoutComponent } from './access/logout/logout.component';
import { AccessComponent } from './access/access.component';
import { RegUserComponent } from './access/reg-user/reg-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    ContentAreaComponent,
    SummaryComponent,
    BoardComponent,
    AddTaskComponent,
    ContactsComponent,
    LogoAnimationComponent,
    NavComponent,
    ChatComponent,
    DateComponent,
    ChatRoomsComponent,
    LoginComponent,
    LogoutComponent,
    AccessComponent,
    RegUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDhOHUFRZOWIbDzqyJyi8HXhKIlC6zslbY',
      authDomain: 'bastisjoin.firebaseapp.com',
      projectId: 'bastisjoin',
      storageBucket: 'bastisjoin.appspot.com',
      messagingSenderId: '644005948029',
      appId: '1:644005948029:web:47801800b498a281299f14',
      measurementId: 'G-1LCHS3WQK6',
    }),
    AngularFireAuthModule,
    ModalModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
