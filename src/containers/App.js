import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth_context';

class App extends Component {
  state = {
    person: [
      { id: 1, name: 'Moin', age: 23 },
      { id: 2, name: 'Utkarsh', age: 24 },
      { id: 3, name: 'Shubham', age: 25 }
    ],
    showNames: false,
    showCockpit: true,
    authenticated: false,
  };

  changeColor = false;

  changeNameHandler = (newName) => {
    if (this.state.showNames) {
      this.setState((prevState) => {
        return {
          person: [
            { id: 1, name: newName, age: 48 }
          ],
          showNames: false
        }
      }
      );

      this.changeColor = false;
    } else {
      this.setState({
        person: [
          { id: 1, name: 'Moin', age: 48 }
        ],
        showNames: true
      });

      this.changeColor = true;
    }
  }

  onChangeHandler = (event, id) => {
    const manIndex = this.state.person.findIndex(m => {
      return m.id === id
    });

    const man = {
      ...this.state.person[manIndex]
    }

    man.name = event.target.value;

    const person = [...this.state.person];
    person[manIndex] = man;

    this.setState({
      person: person
    });

  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.person];
    persons.splice(index, 1);
    this.setState({ person: persons });
  }

  removeCockpit = () => {
    this.setState({
      showCockpit: !this.state.showCockpit
    });
  }

  loginHandler = () => {
    this.setState((prevState) => {
      return {
        authenticated: true
      }
    }
    );
  }
  render() {
    let persons = (
      <Persons person={this.state.person} deleted={this.deletePersonHandler}
        changed={this.onChangeHandler} isAuthenticated={this.state.authenticated}></Persons>
    );

    return (
      <div className={classes.App}>
        <AuthContext.Provider
        value={{authenticated: this.state.authenticated, login: this.loginHandler
        }}>
          {this.state.showCockpit ? (<Cockpit changeColor={this.changeColor} persons={persons} changeNameHandler={this.changeNameHandler}
            ></Cockpit>) : null}
        </AuthContext.Provider>
        <button onClick={this.removeCockpit}>Remove Cockpit</button>
      </div>
    );
  }
}

export default App;
