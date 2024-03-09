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
          <h3 className={styles.titleCard}> <a href='https://www.sebrae-sc.com.br/blog/como-calcular-o-preco-de-um-produto' target='_blank'  className={styles.a}> Como calcular o preço de venda? </a> </h3>
    
        </div>
        <div>
          <Link href='/'>
            <Image style={{ borderRadius: '.1rem' }} src='/marketing.png' alt='' height={300} width={400} />
          </Link>
            <p className={styles.paragraph}>Marketing</p>
            <h3 className={styles.titleCard}> <a href="https://www.mlabs.com.br/blog/marketing-digital-para-ecommerce" target='_blank'  className={styles.a}>9 Dicas Marketing Digital para sua <br />Loja Virtual</a></h3>
            
        </div>
        <div>
          <Link href='/'>
            <Image style={{ borderRadius: '.1rem' }} src='/shoopee.png' alt='' height={300} width={400} />
          </Link>
            <p className={styles.paragraph}>E-commerce</p>
            
            <h3 className={styles.titleCard}> <a href="https://seller.shopee.com.br/edu/article/13388/como-comeco-a-vender-na-shopee" target='_blank' className={styles.a}>Como vender na Shopee: comece <br /> do zero </a></h3>
        </div>
      </main>
    
    </>
  )
}
