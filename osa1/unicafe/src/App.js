import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGood} teksti='good' />
      <Button handleClick={addNeutral} teksti='neutral' />
      <Button handleClick={addBad} teksti='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({ handleClick, teksti }) => ( 
  <button onClick={handleClick}>
    {teksti}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const yht = good + neutral + bad
  const ka = (good - bad) / yht
  const pos = good / yht * 100

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <StatsLine nimi='good' arvo={good} />
      <StatsLine nimi='neutral' arvo={neutral} />
      <StatsLine nimi='bad' arvo={bad} />
      <StatsLine nimi='all' arvo={yht} />
      <StatsLine nimi='average' arvo={ka} />
      <StatsLine nimi='positive' arvo={pos + '%'} />
    </div>
  )
}


const StatsLine = ({ nimi, arvo }) => <p>{nimi} {arvo}</p>

export default App