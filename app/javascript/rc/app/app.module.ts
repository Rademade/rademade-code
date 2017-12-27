import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { AppComponent } from 'app.component';
import { AppStore } from 'app.store';
import { AuthModule } from 'auth.module';
import { AuthGuard, AuthService, SignService } from 'services';
import { AppRoutingModule } from "./app.routing";

@NgModule({

  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    HttpModule,
  ],

  providers: [
    AppStore,
    AuthGuard,
    AuthService,
    SignService
  ],

  declarations: [
    AppComponent
  ],

  bootstrap: [
    AppComponent
  ]

})

export class AppModule {
  constructor(public appRef: ApplicationRef, public appStore: AppStore) {
  }

  hmrOnInit(store) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // restore state
    this.appStore.setState(store.state);
    // restore input values
    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    this.appRef.tick();
    Object.keys(store).forEach(prop => delete store[prop]);
  }

  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    const currentState = this.appStore.getState();
    store.state = currentState;
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
