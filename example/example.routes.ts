import {
  AuthGuardService as AuthGuard
} from '@app/auth/auth.guard.service';
import { Routes } from '@angular/router';
import { ExampleListComponent } from './example-list/example-list.component';
import { ExampleEditComponent } from './example-edit/example-edit.component';

export const EXAMPLE_ROUTES: Routes = [
  {
    path: '',
    component: ExampleListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id/edit',
    component: ExampleEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    component: ExampleEditComponent,
    canActivate: [AuthGuard]
  }
];
