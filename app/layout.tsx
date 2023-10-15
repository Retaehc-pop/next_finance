import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider'
import Link from 'next/link'
import SignInButton from '@/components/SignInButton'
import styles from './layout.module.scss'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link href="/" passHref>Home</Link>
                </li>
                <li>
                  <SignInButton />
                </li>
              </ul>
            </nav>
            {children}
          </AuthProvider>
      </body>
    </html>
  )
}
