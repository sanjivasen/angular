import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppHeaderComponent } from "../app-header/app-header.component";
import { AppFooterComponent } from "../app-footer/app-footer.component";
@NgModule({
  imports: [CommonModule],
  declarations: [
    AppFooterComponent,
    AppHeaderComponent
  ],
  exports: [
    AppFooterComponent,
    AppHeaderComponent
  ],
  providers: []
})

export class AppSharedModule {

 }
