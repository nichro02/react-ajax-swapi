import logo from './logo.svg';
import './App.css';

//import components
import Home from './components/Home'
import Layout from './components/common/Layout'

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
