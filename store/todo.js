import { makeAutoObservable } from 'mobx';

const TASKS_URL = `${process.env.NEXT_PUBLIC_BACK_API}/tasks`;

class Todo {
  tasks = [];
  search = '';

  constructor() {
    makeAutoObservable(this);
  }

  setSearch(value) {
    this.search = value;
  }

  setSortBy(value) {
    this.sortBy = value;
  }

  async loadTasks() {
    let query = '';
    if (this.search) {
      query += `search=${this.search}&`;
    }
    if (this.sortBy) {
      query += `sortBy=${this.sortBy}&`;
    }
    const res = await fetch(`${TASKS_URL}?${query}`, {
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

  async updateTask({ id, title, isFinished }) {
    const body = { title, isFinished };
    const res = await fetch(`${TASKS_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    const task = await res.json();
    this.tasks = this.tasks.map((taskItem) => {
      if (taskItem._id === id) {
        taskItem.isFinished = task.isFinished;
      }
      return taskItem;
    });
    return task;
  }
}

export default new Todo();
