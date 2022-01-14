import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  // Use redirect instead component
  //{ path: "", redirectTo: "passengers", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    // nagular modules
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    // custom modules
    PassengerDashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
