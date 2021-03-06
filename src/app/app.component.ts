import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-testing';
  constructor(public translate:TranslateService){
    translate.addLangs(['en','ban']);
    translate.setDefaultLang('en')
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ban/)? browserLang : 'en')


  }
  logout(){
    localStorage.removeItem('_id')
  }
}
