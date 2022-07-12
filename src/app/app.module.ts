import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { DisableControlModule } from './shared/directives/disable-control/disable-control.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    DisableControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
