import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialComponent } from './Components/tutorial/tutorial.component';
import { GridComponent } from './Components/grid/grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/tutorial', pathMatch: 'full' },
  { path: "tutorial", component: TutorialComponent },
  { path: "pathfinder", component: GridComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
