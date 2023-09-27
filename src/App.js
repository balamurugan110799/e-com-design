import { useState } from 'react';
import './App.css';
import Carousel from './components/layouts/Carousel';
import Navbar from './components/layouts/Navbar';

function App() {
  // const obj = undefined;
  const [array, setArray] = useState(["Bala", "joy", 3, 4, 5])
  const [count, setCount] = useState(1)
  const [forceRender, setForceRender] = useState(false)
  const [answer, setAnswer] = useState(array[0])
  const handleNext = (n) => {
    setCount(count + 1)
    setForceRender(!forceRender)
    var num = 1;
    var num = num + 1;
    if (num === 1) {
      setAnswer(array[0])
    } else if (num === 2) {
      setAnswer(array[1])
    } else if (num === 3) {
      setAnswer(array[2])
    } else if (num === 4) {
      setAnswer(array[3])
    } else if (num === 5) {
      setAnswer(array[4])
    }
    console.log(count, num)

  }
  console.log(count, answer)

  return (
    <div className="App">
      <div>
        <Navbar />
        <div className=' container mx-auto'>


          <div className='grid grid-cols-2'>

            <div className='py-14'> <Carousel /></div>
            <div>
              <button onClick={() => handleNext(5)}>Next</button>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
