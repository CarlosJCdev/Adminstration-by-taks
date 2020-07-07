import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NodeDetailsComponent } from './pages/node-details/node-details.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', component: NotesListComponent},
    {path: 'new', component: NodeDetailsComponent},
    {path: ':id', component: NodeDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
