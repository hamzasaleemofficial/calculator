import './Display.css';

const Display = ({calValue}) => {
  return (
    <div>
    <input className='display' type='text' value={calValue} readOnly/>
    </div>
  )
}

export default Display;