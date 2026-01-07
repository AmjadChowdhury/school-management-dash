import Image from "next/image";
import Link from "next/link";
import logo from './../../../public/logo.png'
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[8%] md:w-[14%] lg:w-[14%] p-4">
        <Link href="/" className="flex justify-center items-center gap-2">
          <Image src={logo} alt="logo" width={32} height={32}/>
          <span className="hidden lg:block">JUSchool</span>
        </Link>
        <Menu/>
      </div>
      {/* Right */}
      <div className="w-[92%] md:w-[86%] lg:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar/>
        {children}
      </div>
        
    </div>
  );
}