import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Footer from "../components/Footer";
import ProviderWrapper from "../components/ProviderWrapper";
// import TabsBar from "../components/TabsBar";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
// import CustomCursor from "@/components/CustomCursor";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://impactmakersevents.com"),
  generator: "Impact Makers Events",
  applicationName: "Impact Makers Events",
  title: "Impact Makers Events",
  description: "Impact Makers Events specializes in crafting unforgettable experiences through expert event planning, innovative design, and seamless execution. From corporate conferences to luxury celebrations, we bring visions to life.",
  keywords: "event management, corporate events, luxury events, exhibitions, branding, AV & lighting, videography, event planning",
  authors: [{ name: "Impact Makers Events" }],
  robots: "index, follow",
  openGraph: {
    title: "Impact Makers Events",
    description: "Transform your events into extraordinary experiences with Impact Makers Events. We offer expert planning, custom event design, and seamless execution for corporate and luxury events.",
    url: "https://impactmakersevents.com",
    siteName: "Impact Makers Events",
    images: [
      {
        url: "/logo_card.png",
        width: 1200,
        height: 630,
        alt: "Impact Makers Events - Event Preview"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ImpactMakersEvents",
    title: "Impact Makers Events",
    description: "From concept to execution, Impact Makers Events delivers high-quality event management services. Let's create something unforgettable.",
    images: "/logo_card.png",
  },
  icons: "/logo_t.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <ProviderWrapper>
          <ThemeProvider attribute="class" enableSystem>
            <div>
              {/* <CustomCursor /> */}
              {/* <TabsBar /> */}
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </ProviderWrapper>
      </body>
    </html>
  );
}
