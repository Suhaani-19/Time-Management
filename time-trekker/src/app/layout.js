import Navbar from './navbar'; 
import Footer from './footer';  
import { TaskProvider } from '../context/TaskContext';
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
          <main>{children}</main> 
          <Footer />
        </TaskProvider>
      </body>
    </html>
  );
}
