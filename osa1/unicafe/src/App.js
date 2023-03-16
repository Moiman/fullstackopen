import { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => <p>{text} {value}</p>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <div>
        <p>Palautetta ei ole annettu</p>
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text='hyvä' value={good} />
      <StatisticLine text='neutraali' value={neutral} />
      <StatisticLine text='huono' value={bad} />
      <StatisticLine text='kaikki' value={all} />
      <StatisticLine text='keskiarvo' value={(good - bad) / (all)} />
      <StatisticLine text='positiivinen' value={100 * good / (all) + ' %'} />
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text='hyvä' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutraali' />
      <Button handleClick={() => setBad(bad + 1)} text='huono' />
      <h2>tilastot</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
