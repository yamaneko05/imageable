import Image from "next/image";
import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed left-0 right-0 top-0">
        <div className="mx-auto flex h-24 max-w-[768px] items-center px-3">
          <Link href="/">
            <Image src="/logo.png" alt="" width={180} height={36} />
          </Link>
        </div>
      </div>
      <div className="flex h-dvh w-screen items-center justify-center">
        {children}
      </div>
    </>
  );
}
