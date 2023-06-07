
import './App.css';
import ClassC from './Props/ClassC';
import Func from './Props/Func';
import ClassS from './State/ClassS';
import FuncS from './State/FuncS';

function App() {
  return (
    <div className="App">
       <Func name='Yogesh' />
       <Func name='saini' />
       <ClassC Cname='Class' />
       <FuncS Values='Data '/>
       <ClassS Name='Class'/>
    </div>
  );
}

export default App;
