import { HeaderComponent } from './components/header.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }