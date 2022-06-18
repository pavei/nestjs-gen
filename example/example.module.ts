import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SharedModule} from '@app/shared/shared.module'
import {TranslateModule} from '@ngx-translate/core';

import { ExampleListComponent } from './example-list/example-list.component';
import { ExampleEditComponent } from './example-edit/example-edit.component';
import { ExampleService } from './example.service';
import { EXAMPLE_ROUTES } from './example.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedModule,
    RouterModule.forChild(EXAMPLE_ROUTES)
  ],
  declarations: [
    ExampleListComponent,
    ExampleEditComponent
  ],
  providers: [ExampleService],
  exports: []
})
export class ExampleModule { }
