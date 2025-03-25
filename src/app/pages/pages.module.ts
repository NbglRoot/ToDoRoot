import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    MainComponent,
    AboutComponent,
    ErrorComponent,
  ]
})
export class PagesModule {

}
