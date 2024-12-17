import type { Metadata } from "next";
import "./globals.css";
// import Providers from "@/components/providers/RQProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "리그 오브 레전드 백과사전",
  description: "League of Legends 챔피언 및 아이템 정보 제공",
  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "리그 오브 레전드 백과사전",
    description:
      "리그 오브 레전드 백과사전은 롤 챔피언과 아이템 정보를 보여주는 웹사이트입니다. 지금 바로 링크를 통해 필요한 정보를 확인해보세요.",
    siteName:
      "리그 오브 레전드 백과사전 | League of Legends Champions and Items",
    images: [
      {
        url: "/images/OG-image.webp",
        width: 800,
        height: 600,
        alt: "Open Graph - League of Legends Image",
      },
    ],
    url: "http://localhost:3000",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="py-[82px] bg-[url('/images/background.webp')] bg-cover bg-no-repeat">
        <Header />
        {/* <Providers>{children}</Providers> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
