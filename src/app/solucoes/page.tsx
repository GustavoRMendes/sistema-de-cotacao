import HeaderPage from '@/components/header'
import React from 'react'
import styles from './Solucoes.module.css'
import FormPage from '@/components/form-seg'
export default function SolucoesPage() {
  return (
    <>
    <HeaderPage/>
    <h3 className={styles.solucoes}>Experimente grátis por 10 dias!</h3>
    <FormPage/>
    </>
  )
}
