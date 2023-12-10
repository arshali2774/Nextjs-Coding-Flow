// this route is used to show some loading using the global loading file.
// We make the component async and use Promise to imitate a request-response state.

export default async function LoadingPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h1>Loading Page</h1>
    </div>
  );
}
