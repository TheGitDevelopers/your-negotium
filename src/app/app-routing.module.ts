import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CauponaContentComponent} from './caupona-content/caupona-content.component';
import {DashboardComponent} from './caupona-content/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'main',
    component: CauponaContentComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
