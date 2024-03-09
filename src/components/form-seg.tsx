import Link from 'next/link'
import React from 'react'

export default function FormPage () {
  return (
    <>
      <form className='form'>
        <input type="text" placeholder='Nome da Empresa' id='empresa' name='empresa' /> <br/>
        <input type="text" placeholder='Seu nome' id='nome' name='nome' /> <br/>
        <input type="text" placeholder='Telefone' /> <br/>
        <input type="text" placeholder='E-mail' /> <br/>
        <input type="text" placeholder='Sua melhor senha' /><br/> <br/>
        <button className='contato'>COMECE AGORA</button>
      </form>
      <p className='login'>Já tem uma conta? <a href='/' className='acessar'>Acessar o sistema</a></p> 
    </>
  )
}
