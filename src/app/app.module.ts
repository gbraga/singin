import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { SinginComponent } from './singin/singin.component';
import { AppRoutingModule } from './/app-routing.module';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2083225361993650")
        }/*,
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("Your-Google-Client-Id")
        }*/
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SinginComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
