"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { LucideX } from "lucide-react";
import { createPortal } from "react-dom";
import { modal } from "@/variants";
import { VariantProps } from "tailwind-variants";

export default function Modal({
  children,
  variants,
  title,
}: {
  children: React.ReactNode;
  variants?: VariantProps<typeof modal>;
  title: string;
}) {
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

  return createPortal(
    <dialog ref={dialogRef} className={modal(variants)} onClose={onDismiss}>
      <div className="flex justify-between">
        <div className="text-lg font-bold">{title}</div>
        <Button onClick={onDismiss} variants={{ variant: "ghost", size: "sm" }}>
          <LucideX />
        </Button>
      </div>
      <div className="mt-4">{children}</div>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
