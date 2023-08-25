import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={task.isFinished}
          tabIndex={-1}
          disableRipple
          onChange={() => onToggle(task._id)}
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
