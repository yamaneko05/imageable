"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { LucideX } from "lucide-react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <div className="fixed inset-0 grid place-items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <dialog
        ref={dialogRef}
        className="rounded-lg bg-white p-4"
        onClose={onDismiss}
      >
        {children}
        <div className="mt-4 flex flex-row-reverse">
          <Button
            onClick={onDismiss}
            variants={{ color: "secondary", size: "sm" }}
          >
            <LucideX />
          </Button>
        </div>
      </dialog>
    </div>
  );
}
