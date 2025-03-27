import Navbar from "@/components/Navbar";
import "../globals.css";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
      <body
        
      >
                <Navbar/>

        <main className="flex flex-col justify-center items-center shrink-0 h-screen">
            {children}
        </main>
        
      </body>
    </html>
    
  );
}
