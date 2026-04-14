export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* 1. The Tailwind Engine (Crucial for centering and alignment) */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* 2. The Modern Font */}
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet" />
        
        {/* 3. Global Styles */}
        <style>{`
          * { 
            font-family: 'Outfit', sans-serif !important; 
          }
          body { 
            background-color: #020617; 
            margin: 0; 
            color: white;
            overflow-x: hidden;
          }
          /* Custom scrollbar */
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #020617; }
          ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
          
          html { scroll-behavior: smooth; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
