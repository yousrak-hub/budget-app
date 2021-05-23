import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }
  onCardClicked(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.budgetItems[this.budgetItems.indexOf(item)] = result;
      }
    });
  }
}
