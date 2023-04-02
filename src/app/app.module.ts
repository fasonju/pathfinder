import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TutorialComponent } from './Components/tutorial/tutorial.component';
import { NodeComponent } from './Components/node/node.component';
import { GridComponent } from './Components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TutorialComponent,
    NodeComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
