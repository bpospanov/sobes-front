'use client';

import todo from '@/store/todo';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import TaskItem from '@/app/(tasks)/TaskItem';
import List from '@mui/material/List';

function TasksList() {
  useEffect(() => {
    todo.loadTasks();
  }, []);

  return (
    <main>
      <List>
        {todo.tasks.length &&
          todo.tasks.map((task) => <TaskItem key={task._id} task={task} />)}
      </List>
    </main>
  );
}

export default observer(TasksList);
