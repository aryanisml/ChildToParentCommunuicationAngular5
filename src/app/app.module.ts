import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HelloSecondComponent } from './hello2.component';
import { SampleService } from './sample.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,HelloSecondComponent],
  bootstrap:    [ AppComponent ],
  providers:[SampleService]
})
export class AppModule { }
