import SignUpStepper from "@/components/features/auth/SignUpStepper";
import CreateProfileForm from "@/components/features/profile/CreateProfileForm";

export default async function EditProfileImagePage() {
  return (
    <div className="px-3">
      <div className="mb-8 text-center text-2xl font-bold">新規登録</div>
      <SignUpStepper doing={2} />
      <CreateProfileForm />
    </div>
  );
}
