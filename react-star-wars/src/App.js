import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'

//import components
import Home from './components/Home'
import Layout from './components/common/Layout'
import Starship from './components/Starship'

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path ="/" component={Home}/>
        <Route path ="/starship/" render={Starship}/>
      </Layout>
    </div>
  );
}

export default App;
