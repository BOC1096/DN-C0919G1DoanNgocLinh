import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComputerComponent } from './component/computer/create-computer/create-computer.component';
import { ListComputerComponent } from './component/computer/list-computer/list-computer.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { ListComponent } from './component/customer/list/list.component';
import { CreateServiceComponent } from './component/service-pc/create-service/create-service.component';
import { ListServiceComponent } from './component/service-pc/list-service/list-service.component';
import { LayoutComponent } from './layout/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComputerComponent,
    ListComputerComponent,
    CreateCustomerComponent,
    ListComponent,
    CreateServiceComponent,
    ListServiceComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
