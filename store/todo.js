import { makeAutoObservable } from 'mobx';

const TASKS_URL = `${process.env.NEXT_PUBLIC_BACK_API}/tasks`;

class Todo {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  async loadTasks() {
    const res = await fetch(TASKS_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const json = await res.json();
    this.tasks = json;
  }

  async addTask(title) {
    const body = { title };
    const res = await fetch(TASKS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    const json = await res.json();
    return json;
  }

  async deleteTask(id) {
    const res = await fetch(`${TASKS_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const json = await res.json();
    return json;
  }
}

export default new Todo();
