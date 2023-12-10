// this is a special file and it renders when we have to show loading when fetching data or updating something.
// There is one global loading file in app dir and we can have local loading in each route folder too.

export default function Loading() {
  return (
    <div>
      <h1>Loading..... </h1>
    </div>
  );
}
