import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { CreateComputerComponent } from './components/computer/create-computer/create-computer.component';
import { ListComputerComponent } from './components/computer/list-computer/list-computer.component';
import { CreateServiceComponent } from './components/service-pc/create-service/create-service.component';
import { ListServiceComponent } from './components/service-pc/list-service/list-service.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    CreateComputerComponent,
    ListComputerComponent,
    CreateServiceComponent,
    ListServiceComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
