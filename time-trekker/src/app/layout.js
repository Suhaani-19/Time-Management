import Navbar from './navbar';  // Navbar component
import Footer from './footer';  // Footer component

export const metadata = {
  title: 'TimeTrekker',
  description: 'Track your time and improve productivity with TimeTrekker',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main> {/* Renders the content of each page */}
        <Footer />
      </body>
    </html>
  );
}
