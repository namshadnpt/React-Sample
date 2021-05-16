
import './App.css'
import Header from './components/Header'
function App() {
  const data = 'Namshad'
  let count = 0;
  return (
    <div>
      <Header data={data} />
      <h1 style={{ color: 'white', backgroundColor: 'red' }}>HelloWorld</h1>
      <p className='hello'> Description {data}</p>
      <br />̥
      {data}
      
      <Test />
      <h1>Counter: {count}</h1>
    </div>
  );
}

export default App;

function Test() {
  return (
    <h1 style={{ color: 'black', backgroundColor: 'red' }}>HelloWorld</h1>
  )
}
