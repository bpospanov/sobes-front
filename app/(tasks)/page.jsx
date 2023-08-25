import TasksList from '@/app/(tasks)/TasksList';
import AddTask from '@/app/(tasks)/AddTask';
import { Container } from '@mui/material';

export default function Tasks() {
  return (
    <Container sx={{ mt: 4 }}>
      <AddTask />
      <TasksList />
    </Container>
  );
}
