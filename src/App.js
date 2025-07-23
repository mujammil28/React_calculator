//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="calculator">

        <div className='output-screen'>
          
          <div className='prev-operand'>
            6824824 *
          </div>  

          <div className='curr-operand'>
4873787248
          </div>

        </div>
        <div className='input-screen'>
             <button className='span-two'>AC</button>
             <button>DEL</button>
             <button>%</button>
             <button>1</button>
             <button>2</button>
             <button>3</button>
             <button>+</button>
             <button>4</button>
             <button>5</button>
             <button>6</button>
             <button>*</button>
             <button>7</button>
             <button>8</button>
             <button>9</button>
             <button>-</button>
             <button>.</button>
             <button>0</button>
             <button className='span-two'>=</button>
        </div>

      </div>




    </div>
  );
}

export default App;
