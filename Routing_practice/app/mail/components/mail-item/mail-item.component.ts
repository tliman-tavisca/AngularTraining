import { Component, Input } from "@angular/core";

import { Mail } from "../../models/mail.interface";

@Component({
  selector: "mail-item",
  styleUrls: ["mail-item.component.scss"],
  template: `
    <a
      class="mail-item"
      [routerLink]="['/mail', { outlets: { pane: ['message', message.id] } }]"
      routerLinkActive="active"
    >
      <h3>
        {{ (message | async).from }}
        <span>{{ message.timestamp | date: "shortTime" }}</span>
      </h3>
      <p>{{ (message | async).summary }}</p>
    </a>
  `,
})
export class MailItemComponent {
  @Input()
  message: Mail;
}
