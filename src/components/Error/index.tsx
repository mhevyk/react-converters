interface ErrorProps<T extends Error> {
  error: T;
}

function Error<T extends Error>({ error }: ErrorProps<T>) {
  return (
    <div className="my-3">
      Converting failed: <span className="text-danger">{error.message}</span>
    </div>
  );
}

export default Error;
