import logo from './logo.svg';
import './App.css';
import Helloworld from './helloworld'
import Greet from './components/greet'
import Welcome from './components/welcome'
function App() {
  return (
    <div className="App">
       {/* <Helloworld></Helloworld> */}
       <Greet name="harish" lastname="Vutukuru">
        <p>This is children props</p>
        <p>Thhhhh</p>
       </Greet>
       <Greet name="pavan" lastname="Bendi">
        <button>Click</button>
       </Greet>
       <Greet name="Meghana" lastname="Bendapudi"></Greet>
       <Welcome name="Bruce" middlename="Richard" lastname="wayne"></Welcome>
       <Welcome name="mark" middlename="Richard" lastname="wayne"></Welcome>
    </div>
  );
}

export default App;
