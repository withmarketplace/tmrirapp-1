import "../globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
        
      >
        <main className="flex flex-col justify-center items-center shrink-0 h-screen">
            {children}
        </main>
        
      </body>
    </html>
    
  );
}
