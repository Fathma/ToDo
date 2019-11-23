import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

import { FormsModule} from '@angular/forms'; 

import { reducer } from './reducers/task.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClientModule, HttpClient } from '@angular/common/http'

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http)
}
@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory ,
        deps:[HttpClient]
      }
    }),
    StoreModule.forRoot({
      task: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
