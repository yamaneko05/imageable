import Sidebar from "@/components/layout/Sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[768px]">
      <Sidebar />
      <div className="ms-56 p-3">{children}</div>
    </div>
  );
}
