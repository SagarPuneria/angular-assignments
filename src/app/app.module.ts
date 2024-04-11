import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './shared/must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
