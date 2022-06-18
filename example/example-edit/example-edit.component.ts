import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToasterService} from 'angular2-toaster';
import { TranslatorService } from '@app/core/translator/translator.service';
import { ExampleService } from '../example.service';
import { Example } from '../example';

@Component({
  selector: 'app-example-edit',
  templateUrl: './example-edit.component.html'
})
export class ExampleEditComponent implements OnInit {

  id!: string;
  example!: Example;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    public translate: TranslatorService,
    public toasterService: ToasterService,
    private exampleService: ExampleService) {
  }

  ngOnInit() {

      const id = this.route.snapshot.params.id;
      try {
        await this.spinner.show();

        if (id) {
          this.item = await this.exampleService.find(id);
        } else {
          this.item = new example();
        }

      } catch (e) {
        console.error(e);
      } finally {
        await this.spinner.hide();

      }
  }

  async save(form) {
    await this.spinner.show();

    (this.item.id ? this.exampleService.update(this.item) :
            this.exampleService.save(this.item)
    ).then(() => {
      this.spinner.hide();
      this.router.navigate(['/examples']);
      this.toasterService.pop(
          'success',
          this.translate.success(),
          this.translate.translateText('SAVE_SUCCESS')
      );
    }).catch(async error => {
      await this.spinner.hide();
      this.toasterService.pop(
          'error',
          this.translate.error(),
          error.error.message
      );
    })
  }

  cancel() {
    this.router.navigate(['/examples']);
  }
}
