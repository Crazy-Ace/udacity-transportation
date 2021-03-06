import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { NavbarComponent } from './navbar/index';
import { FooterComponent } from './footer/index';
import { ScheduleService } from './schedule/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, Ng2PageScrollModule],
  declarations: [NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ScheduleService]
    };
  }
}
