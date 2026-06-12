import "@/app/styles/globals.css";
import Navbar from "@/_components/Navbar/Navbar";
import Footer from "@/_components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}