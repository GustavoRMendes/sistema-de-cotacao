import HeaderPage from '@/components/header'
import React from 'react'
import styles from './Parceiro.module.css'
export default function ParceiroPage() {
  return (
    <>
    <HeaderPage />
    <main className={styles.main}>
      <h1 className={styles.h1Parceiro}>Mais que parceiros,<br/> somos criadores de <br />oportunidades de <br/> negócio!</h1>
    </main>
    </>
    
  )
}
