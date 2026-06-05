import type { Metadata } from "next";
import { Noto_Sans_SC, ZCOOL_XiaoWei, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const zcool = ZCOOL_XiaoWei({
  variable: "--font-zcool",
  subsets: ["latin"],
  weight: "400",
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "奇妙小角落 - 来玩点有趣的",
  description: "住着一群可爱小伙伴的奇妙角落，画画、写诗、讲笑话，偶尔还会犯点小迷糊。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSans.variable} ${zcool.variable} ${notoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
