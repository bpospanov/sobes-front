'use client';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';
import todo from '@/store/todo';
import { useState, useEffect, useMemo } from 'react';

export default function SearchInput() {
  const [search, setSearch] = useState(todo.search);

  const handleChange = (e) => {
    console.log(e.target.value, 'value');
    todo.setSearch(e.target.value);
    console.log(todo.search, 'search');
    todo.loadTasks();
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div>
      <TextField
        label="Поиск"
        variant="outlined"
        fullWidth
        onChange={debouncedResults}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
        sx={{ my: 2 }}
      />
    </div>
  );
}
