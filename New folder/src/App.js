const App = () => {
  console.log('Hello from App component')
  const now = new Date()
  const a = 10
  const b = 20
  const age = 14
  const name = "nicholas"
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p> {/*jsx looks like html but everything in curly brackets gets compiled into js. 
      jsx is a syntax extension to js. jsx produces react elements*/}
      <br /> {/* <br> is a new line tag, but in jsx, the tag needs to be closed, so we use <br /> */}
      <Hello name={name} age={age}/>

      <p>{a} plus {b} is {a+b}</p>
    </div>
  )
}
export default App
//
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, age: {props.age}. From Hello component</p>
    </div>
  )
}

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//define react component with name App
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  
  return (
  <div>
    <p>Hello world, it is {now.toString()}</p>
    <p>
      {a} plus {b} is {a+b}
    </p>
  </div>
  )
}

export default App;
*/
