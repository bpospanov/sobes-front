'use client';

import React, { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Ascending icon
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; // Descending icon
import todo from '@/store/todo';

export default function Sorting() {
  const [sortConfig, setSortConfig] = useState({ field: 'createdAt', dir: '' });

  const handleSortChange = (field) => {
    let newSortConfig = { field, dir: '' };

    if (field === sortConfig.field) {
      newSortConfig = { ...sortConfig, dir: sortConfig.dir === '' ? '-' : '' };
    }

    todo.setSortBy(`${newSortConfig.dir}${field}`);
    todo.loadTasks();
    setSortConfig(newSortConfig);
  };

  return (
    <div>
      <ButtonGroup
        variant="outlined"
        color="primary"
        aria-label="Sort Todo List"
      >
        <Button
          onClick={() => handleSortChange('createdAt')}
          variant={sortConfig.field === 'createdAt' ? 'contained' : 'outlined'}
        >
          {sortConfig.field === 'createdAt' && sortConfig.dir === '' && (
            <ArrowDownwardIcon />
          )}
          {sortConfig.field === 'createdAt' && sortConfig.dir === '-' && (
            <ArrowUpwardIcon />
          )}
          Date Created
        </Button>
        <Button
          onClick={() => handleSortChange('isFinished')}
          variant={sortConfig.field === 'isFinished' ? 'contained' : 'outlined'}
        >
          {sortConfig.field === 'isFinished' && sortConfig.dir === '' && (
            <ArrowDownwardIcon />
          )}
          {sortConfig.field === 'isFinished' && sortConfig.dir === '-' && (
            <ArrowUpwardIcon />
          )}
          Is Finished
        </Button>
      </ButtonGroup>
    </div>
  );
}
