import TasksList from '@/app/(tasks)/TasksList';
import AddTask from '@/app/(tasks)/AddTask';
import Search from '@/app/(tasks)/Search';
import Sorting from '@/app/(tasks)/Sorting';
import { Container } from '@mui/material';

export default function Tasks() {
  return (
    <Container sx={{ mt: 4 }}>
      <Search />
      <AddTask />
      <Sorting />
      <TasksList />
    </Container>
  );
}
