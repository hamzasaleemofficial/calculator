import './Buttons.css';


const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

const Buttons = ({onButtonClick}) => {

  return (
    <div className='buttonsContainer'>

        {
            buttonNames.map((buttonName) => 
            
            <button 
              className='buttons'
              key={buttonName}
              onClick={() => {onButtonClick(buttonName)}}>
              
              {buttonName}
            </button> )
        }
        
        
    </div>
  )
}

export default Buttons;