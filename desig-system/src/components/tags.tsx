function Tag({ context }: { context: string }) {
  return (
    <span className="border rounded-full px-3 py-1 text-xs">{context}</span>
  );
}
export default Tag;
