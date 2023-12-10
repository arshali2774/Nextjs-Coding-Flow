// this is a special file and it renders when we have to show loading when fetching data or updating something.
// There is one global loading file in app dir and we can have local loading in each route folder too.
import { Spinner } from '@/components/bootstrap';
export default function Loading() {
  return (
    <Spinner
      animation='border'
      className='d-block m-auto'
    />
  );
}
