import Image from 'next/image'
import React from 'react'

export default function MainPage() {
  return (
    <main className="main">
      <h1 className="h1-main">
        Controle de <br />
        Cotações Online
      <hr className="hr"/>
      </h1>
      <p className="p-main">
      O módulo de cotações online permite a tomada de preços simultânea a um número maior de fornecedores, obtendo-se melhores preços e condições de compra.
      </p>
    </main>
  )
}