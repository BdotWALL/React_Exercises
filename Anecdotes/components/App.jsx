import {useState} from 'react'

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
 
  const randomAnecdote = () => {
    let anec = Math.floor(Math.random() * 7);
    setSelected(anec);
  }
  const anecdoteVote = () => {
    let newArr = [...points];
    newArr[selected] += 1;
    setPoints(newArr);
  }
  const indexOfMax = points.indexOf(Math.max(...points))

  return (
    <div>
      <h1>Anecdote Of The Day</h1>
      <div>{anecdotes[selected]}</div>
      <div><strong>This anecdote has {points[selected]} points!</strong></div>
      <button onClick={anecdoteVote}>Vote</button>
      <button onClick={randomAnecdote}>Next Anecdote</button>
      <h1>Highest Voted Anecdote</h1>
      <div>{anecdotes[indexOfMax]}</div>
      <div><strong>This anecdote recieved {points[indexOfMax]} votes!!!</strong></div>
    </div>
  )
}

export default App