import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // nagular modules
    BrowserModule,
    FormsModule,
    CommonModule,
    // custom modules
    PassengerDashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
