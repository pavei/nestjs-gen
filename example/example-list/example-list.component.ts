import { Component, OnInit } from '@angular/core';
import { ExampleFilter } from '../example-filter';
import { ExampleService } from '../example.service';
import { Example } from '../example';

@Component({
  selector: 'app-example',
  templateUrl: 'example-list.component.html'
})
export class ExampleListComponent implements OnInit {

  filter = new ExampleFilter();
  selectedExample!: Example;
  feedback: any = {};

  get exampleList(): Example[] {
    return this.exampleService.exampleList;
  }

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.exampleService.load(this.filter);
  }

  select(selected: Example): void {
    this.selectedExample = selected;
  }

  delete(example: Example): void {
    if (confirm('Are you sure?')) {
      this.exampleService.delete(example).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      });
    }
  }
}
