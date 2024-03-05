/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// '../../public/fotoDePerfil3.jpg'
export default function HeaderPage () {
  return (
    <>
      <header className="head">
        <div>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='foto'
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div>
          <nav className='nav'>
            <Link href='/solucoes' className='link'>Soluções</Link>
            <Link href='/integracoes' className='link'>Integrações</Link>
            <Link href='/planos' className='link'>Planos</Link>
            <Link href='/segmentos' className='link'>Segmentos</Link>
            <Link href='/parceiro' className='link'>Seja Parceiro</Link>
            <Link href='/blog' className='link'>Blog</Link>
          </nav>
        </div>
        <div>
          <button className='contato'>Experimentar grátis</button>
        </div>
      </header>
    </>
  )
}
