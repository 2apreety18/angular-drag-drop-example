import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  // letters = [
  //   'C',
  //   'O',
  //   'D',
  //   'E'
  // ];

  // containerId: string | undefined;

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.letters, event.previousIndex, event.currentIndex);
  //   this.containerId = event.container.id;
  //   console.log(event);
  //   console.log(event.container.id);
  //   console.log(event.previousIndex);
  //   console.log(event.currentIndex);
  // }

  fruits = ['🍊', '🍉', '🍋', '🍇','🍏'];
  fastFoods = ['🍔', '🍟', '🍕', '🌮', '🌭'];

  containerId: string | undefined;


  drop(event: CdkDragDrop<string[]>) {
    //if the drag & Drop event has happenedin the same container (previous container === container)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.containerId = event.container.id;

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
}
