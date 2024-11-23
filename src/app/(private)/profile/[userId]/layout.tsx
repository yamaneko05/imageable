export default function ProfileLayout({
  children,
  followed,
  following,
}: {
  children: React.ReactNode;
  followed: React.ReactNode;
  following: React.ReactNode;
}) {
  return (
    <>
      {children}
      {followed}
      {following}
    </>
  );
}
