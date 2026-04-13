export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* This line is the "Styling Engine" that was missing */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        <style>{`
          body { 
            background-color: #020617; 
            margin: 0; 
            font-family: 'Inter', sans-serif;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
