import React, {useState} from 'react';
import Button from './Components/Button/Button'
const App = () => {
    const [state,setState] = useState(0)

    const handleInscrease = () => {
        setState(state + 1)
    }


    const handleDecrease = () => {
        if (state === 0) {
            setState(state)
        } else {
            setState(state - 1)
        }
    }

  return (
      <div>
        <h1>Hello</h1>
          <button onClick={handleInscrease}>Increase</button>
          <button onClick={handleDecrease}>Decrease</button>
          <h2>{state}</h2>

          {/*<Button text={'Shabdan'} />*/}
          {/*<Button text={'Farukh'} />*/}
          {/*<Button text={'Temirlan'} />*/}
          {/*<Button text={'Bob'} />*/}
      </div>
  )
}
export default App;
