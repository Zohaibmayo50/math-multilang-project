import Header from '@/app/components/Header'
import HeaderEs from '@/app/components/es/Header'
import HeaderDe from '@/app/components/de/Header'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    lang: string
  }>
}

export default async function TopicLayout({ children, params }: LayoutProps) {
  const { lang } = await params
  
  return (
    <>
      {lang === 'tr' && <Header />}
      {lang === 'es' && <HeaderEs />}
      {lang === 'de' && <HeaderDe />}
      {children}
    </>
  )
}
