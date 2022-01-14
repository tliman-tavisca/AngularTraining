import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AuthFormComponent } from "./auth-form.component";
import { AuthRememberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from "./auth-message.component";
import { AuthFormDynamicComponent } from "./auth-form-dynamic.component";

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    AuthFormDynamicComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [AuthFormComponent, AuthRememberComponent, AuthFormDynamicComponent],
})
export class AuthFormModule {}
