import { NgModule } from '@angular/core';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const ShareModules = [
  NgxPaginationModule,
  Ng2SearchPipeModule,
  Ng2OrderModule
]
@NgModule({
  declarations: [],
  imports: [ShareModules ],
  exports: [ShareModules]
})
export class ShareModule { }
