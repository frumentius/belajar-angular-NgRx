import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { appReducer } from './NgRx/reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ShowOnlyComponent } from './show-only/show-only.component';
import { EditNameComponent } from './edit-name/edit-name.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ShowOnlyComponent,
    EditNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ stateObj: appReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
