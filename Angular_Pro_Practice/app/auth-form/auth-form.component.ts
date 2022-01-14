import {
  Component,
  Output,
  EventEmitter,
  ContentChild,
  ContentChildren,
  AfterContentInit,
  QueryList,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  ChangeDetectorRef,
  ElementRef,
  Renderer,
} from "@angular/core";

import { User } from "./auth-form.interface";
import { AuthRememberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from "./auth-message.component";

@Component({
  selector: "auth-form",
  styles: [
    `
      .email {
        border-color: #9f72e6 !important;
      }
    `,
  ],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <ng-content select="auth-remember"></ng-content>

        <!-- With ContentChildren and ng if -->
        <!--  <div *ngIf="showMessage">You will be logged in for 30 days</div> -->

        <auth-message [style.display]="showMessage ? 'inherit' : 'none'">
        </auth-message>
        <auth-message [style.display]="showMessage ? 'inherit' : 'none'">
        </auth-message>

        <ng-content select="auth-remember"></ng-content>

        <ng-content select="button"></ng-content>
      </form>
    </div>
  `,
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  //  With ContentChild
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  //  With ContentChildren
  @ContentChildren(AuthRememberComponent)
  rememberAsContentChildren: QueryList<AuthRememberComponent>;

  @Output()
  submitted: EventEmitter<User> = new EventEmitter<User>();

  //  With ViewChild
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  //  With ViewChild
  @ViewChildren(AuthMessageComponent)
  messageWithViewChildren: QueryList<AuthMessageComponent>;

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer) {}

  //  With ViewChild and elementref , add ref to dom using #
  @ViewChild("email") email: ElementRef;

  ngAfterViewInit(): void {
    // USing native element only for web
    /*
    this.email.nativeElement.setAttribute(
      "placeholder",
      "Enter your email address!"
    );

    this.email.nativeElement.classList.add("email");
    this.email.nativeElement.focus(); 
    */

    // Use renderer for Platform independent
    this.renderer.setElementAttribute(
      this.email.nativeElement,
      "placeholder",
      "Enter your email address!"
    );

    this.renderer.setElementClass(this.email.nativeElement, "email", true);
    this.renderer.invokeElementMethod(this.email.nativeElement, "focus");

    /* Using View Children */
    if (this.messageWithViewChildren) {
      this.messageWithViewChildren.forEach((element) => {
        element.days = 20;
      });

      // to solve logs for value changed after view initialised
      this.cd.detectChanges();
    }
  }

  ngAfterContentInit(): void {
    /* Using View Child 

    if (this.message) {
      this.message.days = 10;
    }
    */

    /* Using Content Child */
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }

    /* Using Content Children and querylist */
    if (this.rememberAsContentChildren) {
      this.rememberAsContentChildren.forEach((element) => {
        element.checked.subscribe((checked: boolean) => {
          this.showMessage = checked;
        });
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
