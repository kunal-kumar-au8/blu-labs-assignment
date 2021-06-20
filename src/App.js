import react, { useState, useEffect } from 'react';
import './styles/App.scss';
import fire from './config/fire';
import './styles/App.scss';
import Navbar from './components/elements/Navbar';
import Todos from './components/todos/Todos';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTodo from './components/todos/AddTodo';
import EditTodo from './components/todos/EditTodo';

import React from 'react';
import Login from './components/auth/Login';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };

  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handelLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid_email':
          case 'auth/user-disabled':
          case 'auth/invalid_email':
            setEmailError(err.message);
            break;
          case 'auth/wrong.password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handelSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid_email':
            setEmailError(err.message);
            break;
          case 'auth/wrong.password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handelLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className='App'>
      {user ? (
        <Provider store={store}>
          <Router>
            <div className='App'>
              <Navbar  handelLogout={handelLogout} />
              <div className='container w-75'>
                <div className='py-3'>
                  <Switch>
                    <Route exact path='/' component={Todos} />
                    <Route exact path='/todos/add' component={AddTodo} />
                    <Route
                      exact
                      path='/todos/edit/:id'
                      component={EditTodo}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </Router>
        </Provider>
      ) : (
        // <Todo handelLogout={handelLogout} />
        <Login
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handelSignup={handelSignup}
          handelLogin={handelLogin}
          handelLogout={handelLogout}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};
export default App;
