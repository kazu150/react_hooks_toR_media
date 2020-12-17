import './App.css';
import UseMemoTest from './components/UseMemoTest';
import UseCallbackTest from './components/UseCallbackTest';
import UseRefTest from './components/UseRefTest';
import UseReducerTest from './components/UseReducerTest';
import UseContextTest from './components/UseContextTest';

function App() {
  return (
    <div className="App">
      <UseMemoTest />
      <UseCallbackTest />
      <UseRefTest />
      <UseReducerTest />
      <UseContextTest />
    </div>
  );
}

export default App;
