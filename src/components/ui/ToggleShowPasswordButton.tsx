import { LucideEye, LucideEyeOff } from "lucide-react";

export default function ToggleShowPasswordButton({
  toggleShowPassword,
  showPassword,
}: {
  toggleShowPassword: () => void;
  showPassword: boolean;
}) {
  return (
    <button
      type="button"
      onClick={toggleShowPassword}
      className="absolute end-4 top-1/2 -translate-y-1/2 text-sm underline"
    >
      {showPassword ? <LucideEye /> : <LucideEyeOff />}
    </button>
  );
}
