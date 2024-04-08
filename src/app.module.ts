import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { DemoComponent } from "./Demo/DemoComponent";
import { MainComponent } from "./Main/main";
import { routes } from "./app/app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from "@angular/common/http";
import { DynamicFormComponent } from "./app/dynamic-form/dynamic-form.component";

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    CommonModule, 
    MainComponent, 
    HttpClientModule,
    RouterOutlet,
    RouterModule.forRoot(
    routes
  ),
    ReactiveFormsModule],
  declarations: [DemoComponent, AppComponent, DynamicFormComponent],
  providers:[provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {
}