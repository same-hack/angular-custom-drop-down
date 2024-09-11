import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'drop-down';
  // DropdownComponentに渡すアイテムのリスト
  dropdownItems = ['Item 1', 'Item 2', 'Item 3333333333333333333333'];

  // DropdownComponentから選択された値を受け取り、ログに出力
  handleSelectedValue(index: number) {
    console.log('Selected index:', index); // 選択された値をコンソールに表示
    console.log('Selected Item:', this.dropdownItems[index]); // 選択された値をコンソールに表示
  }
}
