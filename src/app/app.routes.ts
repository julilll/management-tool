import { Routes } from '@angular/router';
import { ManagementToolComponent } from './pages/management-tool/management-tool.component';

export const routes: Routes = [
  { path: 'management-tool', component: ManagementToolComponent},
  {path: '', redirectTo: '/management-tool', pathMatch: 'full'},
];
