import Image from "next/image";
import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto flex h-24 max-w-[768px] items-center">
        <Link href="/">
          <Image src="/logo.png" alt="" width={180} height={36} />
        </Link>
      </div>
      <div className="flex h-[calc(100vh-6rem)] w-screen items-center justify-center">
        {children}
      </div>
    </>
  );
}
