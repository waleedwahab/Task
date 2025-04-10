import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTax from './pages/add-tax/Addtax';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AddTax} />
        </Switch>
    </Router>
  );
}

export default App;
