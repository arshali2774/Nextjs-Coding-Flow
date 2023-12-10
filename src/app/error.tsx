// this is a special file, it is used to show any error occurred.
// It should be a client component always.
'use client';
import { Button } from 'react-bootstrap';
interface ErrorPageProps {
  error: Error;
  reset: () => void; // re-renders the page
}

export default function Error({ error, reset }: ErrorPageProps) {
  console.log(error);
  return (
    <div>
      <h1>Error: {error.message}</h1>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
