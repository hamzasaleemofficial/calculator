
import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display';

function App() {
  const [calValue, setCalValue] = useState('');

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
        setCalValue("");
    } else if(buttonText === '='){
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newValue = calValue + buttonText;
      setCalValue(newValue);
    }
  }

  return (

    <div className="calculator">
      <Display calValue={calValue}/>
      <Buttons onButtonClick={onButtonClick}/>
    </div>
  );
}

export default App;
