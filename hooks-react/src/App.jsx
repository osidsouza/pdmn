import React from 'react'
import Accordion from './components/Accordion'

const itens = [
  {
    titulo: 'Java',
    conteudo: 'Linguagem compilada e interpretada.'
  },
  {
    titulo: 'Python',
    conteudo: 'Linguagem interpretaa e  dinamicamente tipada'
  },
  {
    titulo: 'Javascript',
    conteudo: 'interpretada. executa do lado do cliente e do lado do servidor'
  }
]
const App = () => {
  return (
    <div>
      <Accordion itens={itens}/>

    </div>
  )
}

export default App