import Navbar from './navbar';  // Navbar component
import Footer from './footer';  // Footer component
import { TaskProvider } from '../context/TaskContext';// Import the context provider
import '../styles/globals.css';

export const metadata = {
  title: 'TimeTrekker',
  description: 'Track your time and improve productivity with TimeTrekker',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          <main>{children}</main> {/* Renders the content of each page */}
          <Footer />
        </TaskProvider>
      </body>
    </html>
  );
}
