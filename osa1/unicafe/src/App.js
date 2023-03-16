import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  return (
    <div>
      <h2>tilastot</h2>
      <p>hyvä {good}</p>
      <p>neutraali {neutral}</p>
      <p>huono {bad}</p>
      <p>kaikki {all}</p>
      <p>keskiarvo {(good - bad) / (all)}</p>
      <p>positiivinen {100 * good / (all)}%</p>
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
      <button onClick={() => setGood(good + 1)}>hyvä</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutraali</button>
      <button onClick={() => setBad(bad + 1)}>huono</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
