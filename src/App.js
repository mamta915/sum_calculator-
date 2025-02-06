import { useState } from 'react';
import './App.css';


function App() {

const [num1,setNum1] = useState();
const [num2,setNum2] = useState();
const [add,setAdd] = useState('');


const calsum = (event) => {
  event.preventDefault();
  console.log(event);

  if(num1 == 0 || num2 == 0)
  {
    alert("please enter number");
  }
  else{
    let add = parseInt(num1)+parseInt(num2);
    setAdd(parseInt(add))
  }
}

  return (
    <>
    <div className='app'>
      <div className='container'>
        <h2 className='center'>Sum Calculator</h2>
          <form onSubmit={calsum}>

            <div>
            <input type='text' placeholder='enter number1' value={num1} onChange={(e) => setNum1(e.target.value)} />
            </div>

            <div>
            <input type='text' placeholder='enter number2' value={num2} onChange={(e) => setNum2(e.target.value)} />
            </div>

            <div>
              <button className='btn' type='submit'> submit </button>
            </div>


          <div className='center'>
             <h3>your sum is :{add}</h3>
          </div>
          </form>
      </div>
    </div>
    
    </>
    );
}

export default App;
