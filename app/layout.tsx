export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Loading Space Grotesk - A high-end tech font */}
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet" />
        <style>{`
          * { font-family: 'Space Grotesk', sans-serif !important; }
          body { 
            background-color: #020617; 
            margin: 0; 
            color: white;
          }
          /* Custom scrollbar for premium feel */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #020617; }
          ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
