import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
@Injectable()
export class TodoService {
  toDoLost: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList() {
    this.toDoLost = this.firebasedb.list('titles');
    return this.toDoLost;
  }

  addTitle(title: string) {
    this.toDoLost.push({
      title: title,
      isChecked: false
    })
  }

  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.toDoLost.update($key, { isChecked: flag })
  }
  removeTitle($key: string) {
    this.toDoLost.remove($key);
  }

}
