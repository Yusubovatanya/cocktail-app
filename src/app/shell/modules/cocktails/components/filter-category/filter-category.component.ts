import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterCategoryComponent implements OnChanges {

  @Input() readonly filters: string[];

  @Output() readonly filtersUpdated = new EventEmitter<string[]>();

  form: FormGroup;

  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filters.currentValue) {
      this.buildForm();
    }
  }

  updateFilters(): void {
    console.log(this.form);
    if (this.form.valid) {
      this.filtersUpdated.emit(this.prepareBody());
    }
  }

  private prepareBody(): string[] {
    return Object.keys(this.form.value).filter(key => this.form.value[key]);
  }

  private buildForm(): void {
    const group = {};

    this.filters.forEach((filter) => {

      group[filter] = this.fb.control(true, Validators.required);
    });

    this.form = this.fb.group(group);
  }

}
