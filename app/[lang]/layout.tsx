export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  
  return (
    <html lang={lang}>
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  )
}
