import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    MainComponent,
    AboutComponent,
  ]
})
export class PagesModule {

}
