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

  const onDelete = () => {
    console.log('delete');
  };
  const onToggle = () => {
    console.log('toggle');
  };

  return (
    <main>
      <List>
        {todo.tasks.length &&
          todo.tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
      </List>
    </main>
  );
}

export default observer(TasksList);
