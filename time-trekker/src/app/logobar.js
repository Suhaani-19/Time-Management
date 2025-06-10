"use client"
import Image from 'next/image';
import '../styles/LogoBar.css';


export default function LogoBar() {
  return (
    <div className="logo-bar">
      <Image src="/logo.png" alt="TimeTrekker Logo" width={40} height={40} />
      <span className="title">TimeTrekker</span>
    </div>
  );
}
