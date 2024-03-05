import HeaderPage from '@/components/header'
import React from 'react'
import styles from './Parceiro.module.css'
import Image from 'next/image'
export default function ParceiroPage () {
  return (
    <>
      <HeaderPage />
      <main className={styles.main}>
        <div>
          <h1 className={styles.h1Parceiro}>Mais que parceiros,<br /> somos criadores de <br />oportunidades de <br /> negócio!</h1>
          <p className={styles.pParceiro}>
            Acreditamos em parcerias onde grandes oportunidades são <br />geradas por meio de ideias que se conectam. Conheça <br/> nossas parcerias e escolha a melhor para o seu negócio!
          </p>
        </div>
        <div>
          <Image
            src='/parceiro.png'
            alt='Foto de seja parceiro'
            width={500}
            height={500}
          />
        </div>
      </main>
    </>

  )
}
