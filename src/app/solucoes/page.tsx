import HeaderPage from '@/components/header'
import React from 'react'
import styles from './Solucoes.module.css'
import FormPage from '@/components/form-seg'
export default function SolucoesPage() {
  return (
    <>
    <HeaderPage/>
    <main className={styles.main}>
    <h2 className={styles.solucoes}>Experimente grátis por 10 dias!</h2>
    <FormPage/>
    </main>
    
    </>
  )
}
