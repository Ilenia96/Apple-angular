import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacHomeContainerComponent } from './modules/core/Mac/mac-home-container/mac-home-container.component';

const routes: Routes = [
  { path: 'mac', component: MacHomeContainerComponent },
  { path: '', component: MacHomeContainerComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
