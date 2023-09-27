import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

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
