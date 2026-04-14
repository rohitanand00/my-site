export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Loading the "Outfit" Font for a premium tech feel */}
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet" />
        <style>{`
          * { 
            font-family: 'Outfit', sans-serif !important; 
            box-sizing: border-box;
          }
          body { 
            background-color: #020617; 
            margin: 0; 
            color: white;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
          }
          /* Custom scrollbar to match the dark aesthetic */
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #020617; }
          ::-webkit-scrollbar-thumb { 
            background: #1e293b; 
            border-radius: 10px; 
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #334155;
          }
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
