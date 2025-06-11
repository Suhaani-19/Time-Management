
import '../styles/globals.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { TaskProvider } from '../context/TaskContext'; 

export const metadata = {
  title: 'TimeTrekker',
  description: 'Clockify-style Time Tracker App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider> {/* ✅ Wrap everything inside TaskProvider */}
          <div className="layout-container">
            <Sidebar />
            <div className="main-content">
              <Navbar />
              <main>{children}</main>
            </div>
          </div>
        </TaskProvider>
      </body>
    </html>
  );
}
