import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          {!!session && <div>Logged in as {session.user?.name}</div>}
        </nav>
        {children}
      </body>
    </html>
  );
}
