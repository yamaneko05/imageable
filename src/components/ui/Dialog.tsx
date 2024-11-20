"use client";

import { LucideX } from "lucide-react";
import Button from "./Button";

export default function Dialog({
  children,
  isOpen,
  handleClose,
  title,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  title: string;
}) {
  return isOpen ? (
    <div
      className="fixed start-0 top-0 grid h-screen w-screen place-items-center bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="w-full max-w-96 px-3">
        <div
          className="rounded-xl bg-white px-6 py-4 shadow"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 text-xl font-bold">{title}</div>
          <div className="mb-4">{children}</div>
          <div className="flex flex-row-reverse">
            <Button
              onClick={handleClose}
              variants={{ color: "secondary", size: "sm" }}
            >
              <LucideX className="me-1 inline-block" size={16} />
              閉じる
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
