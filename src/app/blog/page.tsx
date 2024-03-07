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
            <Image style={{ borderRadius: '.1rem' }} src='/calcular.png' alt='' height={300} width={400} />
          </Link>
          <p className={styles.paragraph}>Empreededorismo</p>
          <h3 className={styles.titleCard}>Como calcular o preço de venda?</h3>
          <a href='https://www.sebrae-sc.com.br/blog/como-calcular-o-preco-de-um-produto' className={styles.link} target='_blank'>Ler agora ➡️ </a>
        </div>
        <div>
          <Link href='/'>
            <Image style={{ borderRadius: '.1rem' }} src='/marketing.png' alt='' height={300} width={400} />
          </Link>
            <p className={styles.paragraph}>Marketing</p>
            <h3 className={styles.titleCard}>9 Dicas Marketing Digital para sua <br />Loja Virtual</h3>
            <a href="https://www.mlabs.com.br/blog/marketing-digital-para-ecommerce" className={styles.link} target='_blank' >Ler agora ➡️</a>
        </div>
        <div>
          <Link href='/'>
            <Image style={{ borderRadius: '.1rem' }} src='/shoopee.png' alt='' height={300} width={400} />
          </Link>
            <p className={styles.paragraph}>E-commerce</p>
            <h3 className={styles.titleCard}>Como vender na Shopee: comece <br /> do zero</h3>
            <a href="https://seller.shopee.com.br/edu/article/13388/como-comeco-a-vender-na-shopee" className={styles.link}>Ler agora ➡️</a>
        </div>
      </main>
    
    </>
  )
}
