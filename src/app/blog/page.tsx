import HeaderPage from '@/components/header'
import React from 'react'
import styles from './Blog.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function BlogPage () {
  return (
    <>
      <HeaderPage />
      <div className={styles.subtitle}>
        <a href='#'>Nota Fiscal</a>
        <a href='#'>Sistema ERP</a>
        <a href='#'>Controle de Estoque</a>
        <a href='#'>Gestão Financeira</a>
        <a href='#'>Empreededorismo</a>
        <a href='#'>Marketing e Vendas</a>
        <a href='#'>Tecnologia</a>
      </div>
      <main className={styles.main}>
        <div>
          <Link href='/'>
            <Image style={{ borderRadius: '.2rem' }} src='/calcular.png' alt='' height={300} width={400} />
          </Link>
          <p>Empreededorismo</p>
          <h3>Como calcular o preço de venda?</h3>
          <a href='#'>Ler agora ➡️ </a>
        </div>
        <div>
          <Link href='/'>
            <Image style={{ borderRadius: '.2rem' }} src='/marketing.png' alt='' height={300} width={400} />
          </Link>
            <p>Marketing</p>
            <h3>9 Dicas Marketing Digital para sua <br />Loja Virtual</h3>
            <a href="#">Ler agora ➡️</a>
        </div>
        <div>
          <Link href='/'>
            <Image style={{ borderRadius: '.2rem' }} src='/shoopee.png' alt='' height={300} width={400} />
          </Link>
            <p>E-commerce</p>
            <h3>Como vender na Shopee: comece <br /> do zero</h3>
            <a href="#">Ler agora ➡️</a>
        </div>
      </main>
    </>
  )
}
