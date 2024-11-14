import Sidebar from "@/components/layout/Sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1024px]">
      <Sidebar />
      <div className="ms-64 p-3">{children}</div>
    </div>
  );
}
