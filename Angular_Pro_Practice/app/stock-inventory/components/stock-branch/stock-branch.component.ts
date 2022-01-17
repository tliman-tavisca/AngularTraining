import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "stock-branch",
  styleUrls: ["stock-branch.component.scss"],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input type="text" placeholder="Branch Id" formControlName="branch" />
        <div class="error" *ngIf="required('branch')">Branch ID is rquired</div>
        <div class="error" *ngIf="inValid">
          Invalid Branch id, 1 Letter 3 numbers
        </div>
        <input type="text" placeholder="Manager Code" formControlName="code" />
        <div class="error" *ngIf="required('code')">Branch Code is rquired</div>
      </div>
    </div>
  `,
})
export class StockBranchComponent {
  @Input()
  parent: FormGroup;

  get inValid() {
    return (
      this.parent.get("store.branch").hasError("invalidBranch") &&
      this.parent.get("store.branch").dirty &&
      !this.required("branch")
    );
  }

  required(name: string) {
    return (
      this.parent.get(`store.${name}`).hasError("required") &&
      this.parent.get(`store.${name}`).touched
    );
  }
}
