import Image from 'next/image'
import React from 'react'

export default function MainPage() {
  return (
    <main className="main">
      <h1 className="h1-main">
       CONTROLE DE<br />
       COTAÇÕES ONLINE
      </h1>
      <p className="p-main">
      O módulo de cotações online permite <br/> a tomada de preços simultânea a um <br/> número maior de fornecedores,<br/> obtendo-se melhores preços e <br />condições de compra.
      </p>
      <button style={{margin: '4rem 0rem 0rem 2rem'}} className='contato'>
        EXPERIMENTE GRÁTIS
      </button>
    </main>
  )
}
