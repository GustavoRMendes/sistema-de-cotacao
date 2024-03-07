import HeaderPage from '@/components/header'
import React from 'react'
import styles from './Planos.module.css'
export default function PlanosPage () {
  return (
    <>
      <HeaderPage />
      <main className={styles.main}>
        <h1 className={styles.h1Planos}>Nossos planos com desconto</h1>
        <button className={styles.planesButtons}>ANUAL</button>
        <button className={styles.planesButtons}>SEMESTRAL</button>
        <button className={styles.planesButtons}>MENSAL</button>
      </main>
      
    </>
  )
}