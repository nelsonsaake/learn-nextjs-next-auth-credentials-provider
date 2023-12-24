import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'
import AppBar from '@/components/AppBar'
import Divider from '@/components/Divider'
import ByLine from '@/components/ByLine'
import AuthRequired from '@/components/AuthRequired'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Semper',
  description: 'Semper - learn nextjs custom auth',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <AppBar />
          <AuthRequired>
            {children}
          </AuthRequired>
          <Divider />
          <ByLine />
        </SessionProvider>
      </body>
    </html>
  )
}
