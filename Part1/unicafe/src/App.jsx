import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const AddButtons = ({props}) =>{
  const handleGood = () => props.good[1](props.good[0]+1)
  const handleNeutral = () => props.neutral[1](props.neutral[0]+1)
  const handlebad = () => props.bad[1](props.bad[0]+1)

  return(
    <div>
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handlebad} />
    </div>
  )
}

const StatisticLine = (props) =>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({props}) =>{
  const total = props.good[0]+props.neutral[0]+props.bad[0]
  const average = (props.good[0]-props.bad[0])/total
  const positive = props.good[0]/total
  if(total>0)
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good[0]} />
            <StatisticLine text="neutral" value={props.neutral[0]} />
            <StatisticLine text="bad" value={props.bad[0]} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive + ' %'} />
          </tbody>
        </table>
      </div>
    )
  else
    return(
      <p>No feedback given</p>
    )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const states = {
    good : [good,setGood],
    bad : [bad,setBad],
    neutral : [neutral,setNeutral]
  }

  return (
    <div>
      <h1>give feedback</h1>
      <AddButtons props={states}/>
      <h2>statistics</h2>
      <Statistics props={states} />
    </div>
  )
}

export default App