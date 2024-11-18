import SignUpStepper from "@/components/features/auth/SignUpStepper";
import UploadImageForm from "@/components/features/profile/UploadImageForm";
import { LinkButton } from "@/components/ui";
import { authService } from "@/services/authService";
import { profileService } from "@/services/profileService";
import { userService } from "@/services/userService";

export default async function EditProfileImagePage() {
  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const profile = await profileService.getProfileByUserId(loginUser.id);

  return (
    <div className="px-3">
      <div className="mb-8 text-center text-2xl font-bold">新規登録</div>
      <SignUpStepper doing={2} />
      <UploadImageForm
        imageUrl={await profileService.getImageUrl(profile.image)}
      />
      <LinkButton
        href="/signup/completed"
        variants={{ WidthFull: true, color: "success" }}
      >
        決定する
      </LinkButton>
    </div>
  );
}
