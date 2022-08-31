import { useState } from "react";
import './App.css';

function MyComponent() {
  const [myNumber, setNumber] = useState(0);

  const [state, setState] = useState('')

  const handleSub = () => {
    const toNumber = Number(myNumber)

    if (toNumber > 0) {
      setNumber(toNumber - 1);
    }
    else {
      setNumber(0);
    }

  }

  const handleSum = () => {
    const toNumber = Number(myNumber)

    if (toNumber < state) {
      setNumber(toNumber + 1)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Contador</h1>
        <div className="text">{myNumber}</div>
        <button className="minusButton" onClick={handleSub}>-</button>
        <button className="plusButton" onClick={handleSum}>+</button>
      </div>

      <div className="inputLimit">
        <label htmlFor={'my-input'}>Limite do contador: </label>
        <input
          id={'my-input'}
          type={'number'}
          value={state}
          placeholder={'Informe o valor desejado'}
          onChange={event => {
            const newLimit = event.target.value

            if (!newLimit) setNumber(0)

            if (myNumber > newLimit) setNumber(Number(newLimit))

            setState(newLimit)
          }}
          defaultValue={0}
        />
        <br />
        <span>Limite Definido: {state}</span>
      </div>

      <footer>Developed by Guedev ❤️</footer>


    </div>


  );
}

export default MyComponent;
