import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputTaskFormComponent } from './input-task-form/input-task-form.component';
import { AboutContentComponent } from './about-content/about-content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputTaskFormComponent,
    AboutContentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InputTaskFormComponent,
    AboutContentComponent,
  ]
})
export class ComponentsModule { }
