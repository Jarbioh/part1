import { useState } from 'react'

const anecdotes = [
  'Se fazer algo dói, faça isso com mais frequência.',
  'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
  'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
  'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
  'Otimização prematura é a raiz de todo o mal.',
  'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
  'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
  'A única maneira de ir rápido é ir bem.'
]

const getRandomIndex = (max) => Math.floor(Math.random() * max)

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    let randomIndex
    do {
      randomIndex = getRandomIndex(anecdotes.length)
    } while (randomIndex === selected && anecdotes.length > 1)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxVotes = Math.max(...votes)
  const topAnecdoteIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <h1>Anecdota do dia</h1>
      <div>{anecdotes[selected]}</div>
      <div>Tem {votes[selected]} votos</div>
      <button onClick={handleVote}>votar</button>
      <button onClick={handleNextAnecdote}>próxima anedota</button>

      <h2>Anecdota com mais votos</h2>
      {maxVotes === 0 ? (
        <div>Nenhuma votação ainda.</div>
      ) : (
        <>
          <div>{anecdotes[topAnecdoteIndex]}</div>
          <div>Tem {maxVotes} votos</div>
        </>
      )}
    </div>
  )
}

export default App