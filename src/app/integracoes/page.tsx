import HeaderPage from '@/components/header'
import React from 'react'
import styles from './Integracoes.module.css'
import Image from 'next/image'
export default function IntegracoesPage() {
  return (
    <>
      <HeaderPage/>
      <div className={styles.container}>
      <div>
      <h1 className={styles.integracoes_h1}>Sistema de Gestão <br/>
      integrado ao <br/> Mercado Livre</h1>
      <p className={styles.pMercado}>O SIS é um Sistema de Gestão integrado ao Mercado <br/> Livre que otimiza a gestão da sua empresa e agiliza o <br/> controle de vendas!</p>
      <button style={{marginLeft:'4rem',marginTop:'2rem'}}className='contato'>
       EXPERIMENTE GRÁTIS
      </button>
      </div>
      <div>
      <Image 
        src='/mercadolivre.png' 
        alt='Mercado Livre' 
        width={700}
        height={500} /> 
      </div>
    </div>
      
    </>
  )
}
