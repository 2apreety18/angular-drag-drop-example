import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  letters = [
    'C',
    'O',
    'D',
    'E'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.letters, event.previousIndex, event.currentIndex);
    console.log(event);
    console.log(event.container.id);
    console.log(event.previousIndex);
    console.log(event.currentIndex);
  }
  
}
