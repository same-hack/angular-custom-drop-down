import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  isOpen = false;
  selectedItem: string | null = null;
  items = [
    { label: 'Item 1', value: 'value 1' },
    { label: 'Item 2', value: 'value 2' },
    {
      label: 'Item 3333333333333333333333',
      value: 'value 33333333333333333333333333',
    },
  ];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: { label: string; value: string }) {
    this.selectedItem = item.label;
    this.isOpen = false;
    console.log('selectedValue', item.value);
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      this.isOpen = false;
    }
  }
}
