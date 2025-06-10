import '../styles/globals.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import LogoBar from './logobar';

export const metadata = {
  title: 'TimeTrekker',
  description: 'Clockify-style Time Tracker App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <Sidebar />
          <div className="main-content">
            <LogoBar />
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

