import HeaderPage from '@/components/header'
import React from 'react'

export default function PlanosPage () {
  return (
    <>
      <HeaderPage />
      <h1>Nossos planos com desconto</h1>
      <button className='contato'>Bronze</button>
      <button className='contato'>Prata</button>
      <button className='contato'>Ouro</button>
      <button className='contato'>Platina</button>
    </>
  )
}