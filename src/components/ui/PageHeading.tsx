export default function PageHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mb-4 text-3xl font-bold">{children}</div>;
}
