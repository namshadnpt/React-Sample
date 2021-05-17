
import './App.css'
import Header from './components/Header'
import { useState } from 'react';
import Counter from './Counter';
import Employee from './Employee';
import Count from './Count';
function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState(false)

  const data = 'Namshad'
  const addCount = () => {
    setCount(count + 1)
  }
  let obj = {
    title: 'First Counter',
    count,
    place: 'safsa'
  }

  let emp = [{ name: 'namshad', age: 23 }, { name: 'Minhaj', age: 20 }, { name: 'Test', age: 18 }]
  return (
    <div>
      <Header data={data} />
      <h1 style={{ color: 'white', backgroundColor: 'red' }}>HelloWorld</h1>
      <p className='hello'> Description {data}</p>
      <br />̥
      {data}
      <button onClick={addCount}>Add </button>
      <Test />
      <h1>Counter: {count}</h1>
      <Counter {...obj} />
      <Counter title='Second Counter' count={count} />


      {/* {
        emp.map((ob,index) => {
          return (
            <Employee key={index} name={ob.name} age={ob.age}/>
          )
        })
      } */}

      {
        emp.map((ob, index) =>
        (
          <div>
            <h1>{count}</h1>
            <Employee key={index} {...ob} />
          </div>
        )
        )
      }

      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
      {/* { state ? <Count /> : null} */}
      { state && <Count /> }

    </div>
  );
}

export default App;

function Test() {
  return (
    <h1 style={{ color: 'black', backgroundColor: 'red' }}>HelloWorld</h1>
  )
}
