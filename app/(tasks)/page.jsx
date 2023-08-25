import TasksList from '@/app/(tasks)/TasksList';
import AddTask from '@/app/(tasks)/AddTask';
import Search from '@/app/(tasks)/Search';
import { Container } from '@mui/material';

export default function Tasks() {
  return (
    <Container sx={{ mt: 4 }}>
      <Search />
      <AddTask />
      <TasksList />
    </Container>
  );
}
