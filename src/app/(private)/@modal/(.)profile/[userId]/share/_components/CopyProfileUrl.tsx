"use client";

import { Alert, Button } from "@/components/ui";
import { LucideLink } from "lucide-react";
import { useState } from "react";

export default function CopyProfileUrl({ url }: { url: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="mt-4 space-y-2">
      <Button onClick={handleCopy} variants={{ color: "smoke", size: "sm" }}>
        <div className="flex items-center gap-3">
          <LucideLink />
          <div className="text-sm">{url}</div>
        </div>
      </Button>
      {isCopied && (
        <Alert variants={{ color: "smoke" }}>URLをコピーしました</Alert>
      )}
    </div>
  );
}
