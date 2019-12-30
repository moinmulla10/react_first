import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

   componentDidUpdate(){
       console.log('[Persons.js] componentDidUpdate');
   }

    render() {
        return (
            this.props.person.map((p, index) => {
                return <Person name={p.name} age={p.age} key={p.id} click={() => this.props.deleted(index)}
                    change={(event) => this.props.changed(event, p.id)}></Person>
            }));
    }
}

export default Persons;