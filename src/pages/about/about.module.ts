import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { AppVersion } from '@ionic-native/app-version';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    FontAwesomeModule
  ],
  providers: [AppVersion]
})
export class AboutPageModule {
  constructor() {
    library.add(faBars);
  }
}
