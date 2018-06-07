// Tehtävät 1.6-1.11
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  // 1.10*
  lisaaPalaute = (mika) => {
    return () => this.setState({ [mika]: this.state[mika] + 1 })
  }  

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <div>
          <Button
            handleClick={ this.lisaaPalaute('hyva') }
            text="hyvä"
          />
          <Button
            handleClick={ this.lisaaPalaute('neutraali') }
            text="neutraali"
          />
          <Button
            handleClick={ this.lisaaPalaute('huono') }
            text="huono"
          />
        </div>
        <Statistics {...this.state}/>
      </div>
    )
  }
}

const Statistics = ({ hyva, neutraali, huono }) => {
  if (hyva + neutraali + huono === 0) {
    return <div>
      <h1>statistiikka</h1>
      ei yhtään palautetta annettu
    </div>
  }

  const keskiarvo = () => ((hyva - huono) / (hyva + neutraali + huono)).toFixed(2)

  const positiivisia = () => (100 * hyva / (hyva + neutraali + huono)).toFixed(1) + "%"

  return <div>
    <h1>statistiikka</h1>
    <table>
      <Statistic
        text = "hyvä"
        value = {hyva}
      />
      <Statistic
        text = "neutraali"
        value = {neutraali}
      />
      <Statistic
        text = "huono"
        value = {huono}
      />
      <Statistic
        text = "keskiarvo"
        value = {keskiarvo()}
      />
      <Statistic
        text = "positiivisia"
        value = {positiivisia()}
      />
    </table>
  </div>
}

const Statistic = ({ text, value }) => {
  return (
    <tr> 
      <td>{text}</td> 
      <td>{value}</td> 
    </tr>)
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
