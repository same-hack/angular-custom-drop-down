import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-dropdown', // コンポーネントのセレクタ名
  templateUrl: './dropdown.component.html', // HTMLテンプレートファイル
  styleUrls: ['./dropdown.component.scss'], // CSSファイル
})
export class DropdownComponent {
  /*
   * 使い方


    DropdownComponentを使用して、string[]のitemsを渡し、
    選択された値のindexをhandleSelectedValueで受け取る

    <app-dropdown
      [items]="dropdownItems"
      (selectedValue)="handleSelectedValue($event)"
    ></app-dropdown>


    // DropdownComponentから選択された値を受け取り、ログに出力

    handleSelectedValue(index: number) {
      console.log('Selected index:', index); // 選択された値をコンソールに表示
      console.log('Selected Item:', this.dropdownItems[index]); // 選択された値をコンソールに表示
    }

   */

  // 親コンポーネントから渡されるアイテムリスト
  @Input() items: string[] = [];

  // 親コンポーネントに選択された値を返すためのEventEmitter
  @Output() selectedValue = new EventEmitter<number>();

  // ドロップダウンが開いているかどうかの状態を管理
  isOpen = false;

  // 選択されたアイテムのラベル
  selectedItem: string | null = null;

  // ドロップダウンの表示/非表示を切り替える
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // アイテムが選択されたときに呼び出される
  selectItem(index: number, item: string) {
    this.selectedItem = item; // ボタンに表示するラベルを更新
    this.isOpen = false; // ドロップダウンを閉じる
    this.selectedValue.emit(index); // 選択された値を親コンポーネントに通知
  }

  // ドロップダウンの外側をクリックしたときにメニューを閉じる
  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    // クリックした要素がドロップダウン内でない場合、メニューを閉じる
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      this.isOpen = false;
    }
  }
}
