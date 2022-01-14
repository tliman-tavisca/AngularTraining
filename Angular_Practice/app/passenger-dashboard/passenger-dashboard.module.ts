import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpModule } from "@angular/http";

//Containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

//Components
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";

//Service
import { PassengerDashboardService } from "./passenger-dashboard.service";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
  ],
  imports: [CommonModule, HttpModule],
  exports: [PassengerDashboardComponent],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
