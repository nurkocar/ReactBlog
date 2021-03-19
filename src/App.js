import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetail from './BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/create' component={Create} />
            <Route path='/blogs/:id' component={BlogDetail} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;