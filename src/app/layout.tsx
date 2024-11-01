import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";

const manropeRegular = localFont({
  src: "./fonts/Manrope-Regular.ttf",
  variable: "--font-manrope-regular",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manropeRegular.variable} ${manropeRegular.variable} antialiased`}
      >
        <Header />
        <div className="flex px-10 py-4 max-w-7xl justify-self-center ml-auto mr-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
