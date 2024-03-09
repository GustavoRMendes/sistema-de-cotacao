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
        <section className={styles.section}>
          <div className={styles.card}>
            <div>
              <h2 className={styles.title}>BRONZE</h2>
            </div>
            <p className={styles.economize}>Economize R$ 632</p>
            <p className={styles.psmall}>R$ <strong className={styles.preco}>79</strong>
            <br/>
            por mês no contrato atual
            </p>
            <button className={styles.teste}>TESTE GRÁTIS</button> <br/>
            <a href="#" className={styles.planosLinks}>Ver todos os recursos</a>
          </div>
          <div className={styles.card}>
            <div>
              <h2 className={styles.title}>PRATA</h2>
            </div>
            <p className={styles.economize}>Economize R$ 1.050</p>
            <p className={styles.psmall}>R$ <strong className={styles.preco}>129</strong>
            <br/>
            por mês no contrato atual
            </p>
            <button className={styles.teste}>TESTE GRÁTIS</button> <br/>
            <a href="#" className={styles.planosLinks}>Ver todos os recursos</a>
          </div>
          <div className={styles.card}>
            <div>
              <h2 className={styles.title}>OURO</h2>
            </div>
            <p className={styles.economize}>Economize R$ 1.610</p>
            <p className={styles.psmall}>R$ <strong className={styles.preco}>199</strong>
            <br/>
            por mês no contrato atual
            </p>
            <button className={styles.teste}>TESTE GRÁTIS</button> <br/>
            <a href="#" className={styles.planosLinks}>Ver todos os recursos</a>
          </div>

        </section>
      </main>
      
    </>
  )
}