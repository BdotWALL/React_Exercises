import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const all = good + bad + neutral

  if (all === 0) {
   return (
    <div>No Feedback Given
    </div>
  )
}

  return (
    <div>
      <table>
        <tbody>
        <Statistic text={'Good:'} value={good} />
        <Statistic text={'Neutral:'} value={neutral} />
        <Statistic text={'Bad:'} value={bad} />
        <Statistic text={'All:'} value={all} />
        <Statistic text={'Average:'} value={(good - bad) / all} />
        <Statistic text={'Positive:'} value={(good / all * 100) + ' %'} />
        </tbody>
      </table>
    </div>
  )}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Good = () => setGood(good + 1)
  const Neutral = () => setNeutral(neutral + 1)
  const Bad = () => setBad(bad +1)

  
  return (
    <div>
        <h1>Give Feedback</h1>
        <Button onClick={Good} text ="Good" />
        <Button onClick={Neutral} text ="Neutral" />
        <Button onClick={Bad} text ="Bad" />
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} /> 
      
    </div>
  )
}

export default App