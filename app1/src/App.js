import logo from './logo.svg';
import './App.css';
import Helloworld from './helloworld'
import Greet from './components/greet'
import Welcome from './components/welcome'
import Message from './components/Message'
import Counter from './components/counter'
import Functionclick from './components/functionclick'
import Classclick  from './components/classclick';
import Eventbind from './components/eventbind'
import Parentcomponent from './components/parentcomponent';
import Namelist from './components/namelist'
function App() {
  return (
    <div>
       {/* <Helloworld></Helloworld> */}
       {/* <Greet name="harish" lastname="Vutukuru">
        <p>This is children props</p>
        <p>Thhhhh</p>
       </Greet> */}
       {/* <Greet name="pavan" lastname="Bendi">
        <button>Click</button>
       </Greet> */}
       {/* <Greet name="Meghana" lastname="Bendapudi"></Greet>
       <Welcome name="Bruce" middlename="Richard" lastname="wayne"></Welcome>
       <Welcome name="mark" middlename="Richard" lastname="wayne"></Welcome> */}
       {/* <Message>
        <button>Click</button>
       </Message> */}
       {/* <Counter></Counter> */}
       {/* <Functionclick></Functionclick>
       <Classclick></Classclick> */}
{/* <Eventbind></Eventbind> */}
{/* <Parentcomponent></Parentcomponent> */}
<Namelist></Namelist>
    </div>
  );
}

export default App;
