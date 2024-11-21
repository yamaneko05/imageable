export function getPublicUrl(assetName: string) {
  const PROJECT_ID = "msoyplsqlqhobfnanneo";
  const BUCKET = "profile-images";

  return `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET}/${assetName}`;
}
