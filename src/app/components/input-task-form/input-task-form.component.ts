import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-input-task-form',
  standalone: false,
  templateUrl: './input-task-form.component.html',
  styleUrl: './input-task-form.component.css'
})
export class InputTaskFormComponent implements OnInit {
  // tasks saved in local storage
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if(localStorage.getItem('tasks')) {
        this.tasks = JSON.parse(localStorage.getItem('tasks')!);
      }
    }
  }
  // creation of new tasks
  tasks: Array<{id: number, title: string, message: string, dateCreation: Date}> = [];
  createTask() {
    if(this.checkParameters()) {
      const newTask = {
        id: this.tasks.length + 1,
        title: (document.querySelector('#newTaskTitle') as HTMLInputElement).value,
        message: (document.querySelector('#newTask') as HTMLTextAreaElement).value,
        dateCreation: new Date(),
      }
      const title = document.querySelector('#newTaskTitle') as HTMLInputElement;
      const textarea = document.querySelector('#newTask') as HTMLTextAreaElement;
      title.value = '';
      textarea.value = '';
      this.checkifEmpty();
      this.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    } else {
      alert('Para crear perfil se nesesitan todos los campos rellenados!');
    }
  }

  checkParameters(): boolean {
    const taskTitle = document.querySelector('#newTaskTitle') as HTMLInputElement;
    const taskMessage = document.querySelector('#newTask') as HTMLTextAreaElement;
    if(taskTitle.value !== '' && taskMessage.value !== '') {
      return true;
    } else {
      return false;
    }
  }

  // delete tasks
  deleteTask(id: number) {
    const userResponse = prompt('¿Seguro que quieres borrar esta tarea? \n Escribe "ELIMINAR" en mayusculas para confirmar.');
    if(userResponse === 'ELIMINAR') {
      this.tasks = this.tasks.filter((task: { id: number }) => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    } else {
      alert('No se ha eliminado la tarea.');
    }
  }

  // btn to clear textarea from form "new task & only show btns when text is present in textarea"
  textAreaEmpty = true;
  checkifEmpty() {
    const textArea = document.querySelector('#newTask') as HTMLTextAreaElement;
    textArea.value !== '' ? this.textAreaEmpty = false : this.textAreaEmpty = true;
  }
  clearTextAreaBtn() {
    const textArea = document.querySelector('#newTask') as HTMLTextAreaElement;
    this.textAreaEmpty = true;
    textArea.value = '';
  }

  // show or hide all tasks
  displayTasks = false;
  showHideTasks() {
    if(!this.displayTasks) {
      this.displayTasks = true;
    } else {
      this.displayTasks = false;
    }
  }
}
