import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AuthFormModule } from "./auth-form/auth-form.module";

import { AppComponent } from "./app.component";
import { AuthFormDynamicComponent } from "./auth-form/auth-form-dynamic.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthFormModule],
  bootstrap: [AppComponent],
  entryComponents: [AuthFormDynamicComponent],
})
export class AppModule {}
