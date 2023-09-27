import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Metadata } from "next";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "VX Resources",
  description: "VX DEV Mastery Resources",
  other: {
    "theme-colo": "#0d1117",
    "color-theme": "dark only",
    "twitter:image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg",
    "og:image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg",
    "og:type": "website",
    "og:title": "VX Resources",
    "og:description": "VX DEV Mastery Resources",
    "og:url": "https://vx-resources.vercel.app/",
    "twitter:card": "summary_large_image",
    "twitter:site": "@vxdev",
    "twitter:creator": "@vxdev",
    "twitter:title": "VX Resources",
    "twitter:description": "VX DEV Mastery Resources",
    "twitter:image:alt": "VX DEV Mastery Resources",
    "twitter:domain": "vx-resources.vercel.app",
  },
};

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
