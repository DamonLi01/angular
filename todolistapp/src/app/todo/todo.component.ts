import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];
  constructor(private toDoSerivce: TodoService) { }

  ngOnInit() {
    this.toDoSerivce.getToDoList().snapshotChanges()
      .subscribe(item => {
        this.toDoListArray = [];
        item.forEach(element => {
          var x = element.payload.toJSON();
          x["$key"] = element.key;
          this.toDoListArray.push(x);
        });
        //sort array isChecked false -> true
        this.toDoListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        })
      })






  }


  onAdd(itemTitle) {
  if(!itemTitle.value){alert('不能为空');return;}
      this.toDoSerivce.addTitle(itemTitle.value);
      itemTitle.value = null;
   
  }

  alterCheck($key: string, isChecked) {
    this.toDoSerivce.checkOrUnCheckTitle($key, !isChecked);
  }

  onDelete($key: string) {
    this.toDoSerivce.removeTitle($key);
  }
}
