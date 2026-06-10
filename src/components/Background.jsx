export default function Background() {
  return (
    <>
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/20 blur-3xl rounded-full" />

      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-600/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}