import { NgModule } from '@angular/core';

import { GatewayStatefulSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GatewayStatefulSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GatewayStatefulSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GatewayStatefulSharedCommonModule {}
