import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy, ModalController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {Api} from './data/api';
import {HomePage} from './ui/home/home.page';
import {ImageViewerPage} from './ui/image-viewer/image-viewer.page';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [
        ImageViewerPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot([
            ModalController,
        ]),
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HomePage,
        Api,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
