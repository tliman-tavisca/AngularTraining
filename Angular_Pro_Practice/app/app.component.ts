import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { User } from "./auth-form/auth-form.interface";

import { AuthFormDynamicComponent } from "./auth-form/auth-form-dynamic.component";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      <div>
        <button (click)="destroyComponent()">Destory</button>
      </div>
      <div>
        <button (click)="moveComponent()">Move</button>
      </div>

      <div>
        Dynamic Component
        <div #entry></div>
      </div>

      <!-- Declarartive way to add dynamic temlpate  -->
      <ng-container [ngTemplateOutlet]="tmpl" context="ctx"> </ng-container>

      <div>
        <h3>Dynamic template</h3>
        <template #tmpl let-name let-location="location">
          {{ name }} : {{ location }}
        </template>
      </div>
    </div>
  `,
})
export class AppComponent implements AfterContentInit {
  component: ComponentRef<AuthFormDynamicComponent>;
  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;

  @ViewChild("tmpl") tmpl: TemplateRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormDynamicComponent
    );

    this.entry.createComponent(authFormFactory);

    // to set order of dynamic compenent pass order
    this.component = this.entry.createComponent(authFormFactory, 0);

    // Instead of passing input to component dynamically update the property
    this.component.instance.title = "Create Account";

    // Dynamically subsribe for events of event emitter i.e. @output
    this.component.instance.submitted.subscribe(this.loginUser);

    // Dynamic template
    this.entry.createEmbeddedView(this.tmpl, {
      // Use $implicit will bind first value for name without property name
      $implicit: "Test",
      location: "Pune, IN",
    });
  }

  rememberMe: boolean = false;
  createUser(user: User) {
    console.log("Create Account", user);
  }

  loginUser(user: User) {
    console.log("Login", user);
  }

  remeberUser(remeber: boolean) {
    this.rememberMe = remeber;
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  // dynamic template object passing using declarative way
  ctx = {
    $implicit: "Ctx Test",
    location: "Ctx Pune, IN",
  };
}
