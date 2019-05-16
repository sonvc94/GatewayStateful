import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GatewayStatefulSharedLibsModule, GatewayStatefulSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GatewayStatefulSharedLibsModule, GatewayStatefulSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GatewayStatefulSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayStatefulSharedModule {
  static forRoot() {
    return {
      ngModule: GatewayStatefulSharedModule
    };
  }
}
