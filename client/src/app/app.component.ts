import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  fruits = ['🍊', '🍉', '🍋', '🍇','🍏'];

  fastFoods = ['🍔', '🍟', '🍕', '🌮', '🌭'];
  
  containerId: string | undefined;


  drop(event: CdkDragDrop<string[]>) {
   
  }
  
}






// if (event.previousContainer === event.container) {
//   //the drag & Drop event has happened within the same container
//   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//   this.containerId = event.container.id;
//   console.log(event.container.data)
// } else {
//   //the drag & Drop event has happened within the same container
//   transferArrayItem(
//     event.previousContainer.data,
//     event.container.data,
//     event.previousIndex,
//     event.currentIndex,
//   );
//   this.containerId = event.container.id;
// }