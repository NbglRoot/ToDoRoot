import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    // check for users choice: hide tasks or show tasks
    console.log('changes')
      const btnChoice = document.querySelector('#btnShowHide') as HTMLButtonElement;
      if(btnChoice.textContent === 'Ocular Tareas') {
        this.pageShow = false
      } else {
        this.pageShow = true
      }
    }
  pageShow = false;
}
