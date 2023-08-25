import { makeAutoObservable } from 'mobx';

class Auth {
  constructor() {
    makeAutoObservable(this);
  }

  async register({ email, password }) {
    const data = {
      email,
      password,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/auth/registration`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
      },
    );

    return await res.json();
  }

  async login({ email, password }) {
    const data = {
      email,
      password,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    return await res.json();
  }

  async logout() {
    await fetch(`${process.env.NEXT_PUBLIC_BACK_API}/auth/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  }
}

export default new Auth();
