import { makeAutoObservable } from 'mobx';

class Todo {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  async loadTasks() {
    const res = await fetch('http://localhost:3000/api/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const json = await res.json();
    this.tasks = json;
  }
}

export default new Todo();
