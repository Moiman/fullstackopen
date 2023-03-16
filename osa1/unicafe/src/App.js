import { useState } from 'react';

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
      <h2>tilastot</h2>
      <p>hyvä {good}</p>
      <p>neutraali {neutral}</p>
      <p>huono {bad}</p>
      <p>kaikki {good + neutral + bad}</p>
      <p>keskiarvo {(good - bad) / (good + neutral + bad)}</p>
      <p>positiivinen {100 * good / (good + neutral + bad)}%</p>
    </div>
  )
}

export default App;
