import { Metadata } from "next";
import "./globals.css";

const title = "imageable";
const description = "imageableは画像やテキストを投稿できるサービスです";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-sans">
        {children}
        <div id="modal-root" />
      </body>
    </html>
  );
}
