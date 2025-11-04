import "./globals.css";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata = {
  title: "Kingsong Canada - Electric Scooters & Unicycles",
  description: "Modern web experience powered by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
