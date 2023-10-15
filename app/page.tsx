'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import SignInButton from '@/components/SignInButton'
import { useSession } from 'next-auth/react'
export default function Home() {

  const { data: session } = useSession()
  

  return (
    <main className={styles.main}>
    {
      session ? (
        <div>
          login
        </div>
        ):(
          <div>
            not login
            </div>
        )
    }
    </main>

  )
}
