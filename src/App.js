import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Register from './Register';
import Home from './Home';
import { BrowserRouter as Router} from "react-router-dom";
import SignIn from './SignIn';


function App() {

  return (
    <Router>
      <Route path='/'>
        <Home/>
      </Route>
      <Route path='/Register'>
        <Register/>
      </Route>
      <Route path='/SignIn'>
        <SignIn/>
      </Route>
    </Router>
  );
}

export default App;
