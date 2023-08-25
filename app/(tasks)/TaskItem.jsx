import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Checkbox,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import todo from '@/store/todo';

export default function TaskItem({ task }) {
  const toggleFinished = async () => {
    await todo.updateTask({ id: task._id, isFinished: !task.isFinished });
  };
  const onDelete = async () => {
    await todo.deleteTask(task._id);
    todo.loadTasks();
  };
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={task.isFinished}
          tabIndex={-1}
          disableRipple
          onChange={() => toggleFinished()}
        />
      </ListItemIcon>
      <ListItemText primary={task.title} />
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => onDelete(task._id)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
