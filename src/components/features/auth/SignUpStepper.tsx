import { stepperIcon, stepperText } from "@/variants";
import { LucideBookUser, LucideMail, LucideUser2 } from "lucide-react";

const steps = [
  {
    lucide: <LucideUser2 size={18} />,
    name: "ユーザー情報を入力",
  },
  {
    lucide: <LucideMail size={18} />,
    name: "メール認証",
  },
  {
    lucide: <LucideBookUser size={18} />,
    name: "プロフィールを作成",
  },
];

export default function SignUpStepper({ doing }: { doing: number }) {
  return (
    <div className="mb-8 grid grid-cols-3">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className={stepperIcon({ doing: index === doing })}>
            {step.lucide}
          </div>
          <div className={stepperText({ doing: index === doing })}>
            Step{index + 1}
          </div>
          <div className="text-sm">{step.name}</div>
        </div>
      ))}
    </div>
  );
}
