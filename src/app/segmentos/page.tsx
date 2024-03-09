import HeaderPage from '@/components/header'
import React from 'react'
import styles from './Segmentos.module.css'
import Image from 'next/image'
export default function SegmentosPage () {
  return (
    <>
      <HeaderPage />
      <main className={styles.main} >
        <div>
          <h1 className={styles.h1Segmentos}>
            Sistema para loja de roupas <br />simples, ágil e acessível
          </h1>
          <p className={styles.pSegmentos}>O sistema para loja de roupas do SIS Cota oferece <br/> funcionalidades que atendem às necessidades da sua gestão.<br/> Controle de estoque, gestão de compras, integração com e- <br />commerce, emissão de boletos e notas fiscais, controle de vendas, <br />alertas de estoque mínimo, cadastro de produtos com variações de <br/> cores, tamanhos e muito mais!</p>
          <button className='contato' style={{margin: '2rem 0rem 0rem 2rem'}}>SAIBA MAIS</button>
        </div>
        <div>
          <Image
            src='/segmentos.png'
            alt=''
            width={500}
            height={500}
          />
        </div>
      </main>
    </>
  )
}