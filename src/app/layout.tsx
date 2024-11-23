import "./globals.css";

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
