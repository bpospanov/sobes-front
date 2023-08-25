'use client';

import { Modal, Button, TextField, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import todo from '@/store/todo';

export default function AddTask() {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  useEffect(() => {
    setError(false);
    setHelperText('');
  }, [taskName]);

  const handleSubmit = async () => {
    try {
      if (!taskName) {
        setError(true);
        setHelperText('Заполните название');
        return;
      }
      await todo.addTask(taskName);
      setOpen(false);
      setTaskName('');
      todo.loadTasks();
    } catch (error) {
      console.error('Error while adding task:', error);
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)} sx={{ my: 2 }}>
        Добавить задачу
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
          }}
        >
          <h2>Добавить задачу</h2>
          <TextField
            error={error}
            helperText={helperText}
            label="Название"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2, width: '100%' }}
          >
            Добавить
          </Button>
        </Box>
      </Modal>
    </>
  );
}
