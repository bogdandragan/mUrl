import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";



const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: ':id/stats', component: AppComponent },
];

@NgModule({
  exports: [ RouterModule],
  imports: [
    RouterModule.forRoot(routes,    { enableTracing: true } // <-- debugging purposes only),
  ],
  declarations: []
})
export class AppRoutingModule {
}
