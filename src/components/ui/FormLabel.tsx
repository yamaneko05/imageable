export default function FormLabel({
  children,
  attributes,
}: {
  children: React.ReactNode;
  attributes: React.ComponentProps<"label">;
}) {
  return (
    <label className="mb-1 block text-sm" {...attributes}>
      {children}
    </label>
  );
}
