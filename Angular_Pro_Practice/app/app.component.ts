import { Component } from "@angular/core";
import { User } from "./auth-form/auth-form.interface";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <auth-form (submitted)="createUser($event)">
        <h3>Create Account</h3>
        <button type="submit">Join us</button>
      </auth-form>
      <auth-form (submitted)="loginUser($event)">
        <h3>Login</h3>
        <auth-remember (checked)="remeberUser($event)"></auth-remember>
        <button type="submit">Login</button>
      </auth-form>
    </div>
  `,
})
export class AppComponent {
  rememberMe: boolean = false;
  createUser(user: User) {
    console.log("Create Account", user);
  }

  loginUser(user: User) {
    console.log("Login", user, this.rememberMe);
  }

  remeberUser(remeber: boolean) {
    this.rememberMe = remeber;
  }
}
