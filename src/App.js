import './App.css';
import UseMemoTest from './components/UseMemoTest';
import UseCallbackTest from './components/UseCallbackTest';
import UseRefTest from './components/UseRefTest';

function App() {
  return (
    <div className="App">
      <UseMemoTest />
      <UseCallbackTest />
      <UseRefTest />
    </div>
  );
}

export default App;
