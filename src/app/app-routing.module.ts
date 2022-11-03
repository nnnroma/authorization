import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFormComponent } from "./page-form/page-form.component";
import { AuthGuard } from "./guards/auth.guard";
import { MainComponent } from "./main/main.component";
import { GraphComponent } from "./graph/graph.component";

const routes: Routes = [
  { path: '', component: PageFormComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'graph', component: GraphComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ]
})

export class AppRoutingModule { }
