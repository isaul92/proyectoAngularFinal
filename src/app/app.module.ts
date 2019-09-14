import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import {routing,appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,routing,HttpClientModule,FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
