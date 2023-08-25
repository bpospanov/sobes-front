import Navbar from '@/app/(tasks)/Navbar';

export default function TasksLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
