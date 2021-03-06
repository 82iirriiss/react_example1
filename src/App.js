import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import { Route,Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr/>
      <Route path='/' component={Home} exact={true}/>
      <Route path={['/about', '/info']} component={About}/>
      {/* <Route path="/info" component={About}/> */}
      
    </div>
  );
};

export default App;
