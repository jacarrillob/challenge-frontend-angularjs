import angular from 'angular';

angular.module('carecloud').service('TodosService', TodosService);


export class TodosService {
  todoList = [
    {
      id: 1,
      task: 'Todo One',
      priority: 'High',
      description: 'Hola todo one',
    },
    {
      id: 2,
      task: 'Todo Two',
      priority: 'Medium',
      description: 'Hola todo two'
    },
    {
      id: 3,
      task: 'Todo Three',
      priority: 'Low',
      description: 'Hola todo three'
    }
  ];

  constructor(private deletePopup: ToastrService) { }

  deleteTodo(item) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);

    // this.deletePopup.success(`Todo ${item.id} Deleted!`);
  }

  addTodo(title) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: title
    }
    this.todoList.unshift(item);
  }

  updateFav(){
    this.fav = JSON.parse(localStorage.getItem('favorite'));
  }
}