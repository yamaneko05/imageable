import { LucideAlertCircle } from "lucide-react";

export default function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex gap-2 rounded-lg bg-red-200 p-3">
      <LucideAlertCircle className="translate-y-0.5 text-red-500" />
      <div className="">{children}</div>
    </div>
  );
}
