import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { AppComponent } from 'app.component';
import { AppStore } from 'app.store';
import { AuthModule } from 'auth.module';
import { AppRoutingModule } from "./app.routing";
import { AuthGuard } from '@shared/guards/auth.guard';
import { AuthService } from '@shared/services/auth.service';
import { SignApiService } from '@shared/services/api/sign.api.service';
import { CurrentUserService } from '@shared/services/current-user.service';

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
    SignApiService,
    CurrentUserService
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
