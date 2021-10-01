import logo from './logo.svg';
import './App.scss';
import Nav from './Nav';
import MiddleSection from './MiddleSection';
import Footer from './Footer';
import Apply  from './Apply';
import ApplyForm from './ApplyForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={MiddleSection} />
          <Route path="/apply" component={Apply} />
          <Route path="/applyForm" component={ApplyForm} />
        </Switch>
        

        <Footer />
    </div>
    </Router>
    
  );
}

export default App;
