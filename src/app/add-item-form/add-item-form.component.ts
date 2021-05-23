import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> =
    new EventEmitter<BudgetItem>();
  isNewItem: boolean;
  constructor() {}

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }
  onSubmit(itemForm: NgForm) {
    this.formSubmit.emit(itemForm.value);
    itemForm.reset();
  }
}
