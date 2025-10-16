import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "800"] });

export const metadata: Metadata = {
  title: "Patner In Code | Compro Pic",
  description:
    "Compro Pic adalah layanan pembuatan website profesional untuk perusahaan dan bisnis Anda. Kami menyediakan solusi lengkap mulai dari desain, pengembangan, hingga pemeliharaan website yang sesuai dengan kebutuhan Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
