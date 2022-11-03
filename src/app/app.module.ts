import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageFormComponent } from './page-form/page-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfoPageComponent } from './info-page/info-page.component';
import {AuthInterceptorService} from "./auth-interceptor.service";

//Material
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { boardsReducer } from "./store/reducer";
import { UserEffects } from "./store/effect";
import { boardsSelectorKey } from "./store/select";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MainComponent } from './main/main.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MatTableModule } from "@angular/material/table";
import { GraphComponent } from './graph/graph.component';
import { NgChartsModule } from 'ng2-charts';
import { BoardComponent } from './board/board.component';
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    AppComponent,
    PageFormComponent,
    InfoPageComponent,
    MainComponent,
    UsersListComponent,
    GraphComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatTabsModule,
    StoreModule.forRoot({[boardsSelectorKey]: boardsReducer, }, {}),
    EffectsModule.forRoot([UserEffects]),
    StoreRouterConnectingModule.forRoot(),
    MatTableModule,
    NgChartsModule,
    MatButtonModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
