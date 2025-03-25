import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path: 'inicio', component: MainComponent},
  {path: 'sobre-calcroot', component: AboutComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
