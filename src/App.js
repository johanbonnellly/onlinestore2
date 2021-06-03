import React from 'react'
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Chekout from './Chekout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider'

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in 
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch ({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      //cleanup
      unsubscribe()
    }

  }, [])


  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path = '/checkout'>
      <Header />
        <Chekout />
      </Route>
      <Route path = '/LogIn'>
      <Login />
      </Route>
      <Route path  = '/'>
        <Header />
      <Home />

      </Route>
    </Switch>

    
    </div>
    </Router>
  );
}

export default App;
