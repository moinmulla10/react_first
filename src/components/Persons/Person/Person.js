import React, { Component } from 'react';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth_context';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    render() {
        return (
            <div className={classes.Div}>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? (<p>Authenticated</p>) : (<p>Please Login</p>)}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age * 3} years old</p>
                <input type='text' onChange={this.props.change} ref={this.inputElementRef}></input>
            </div>
        );
    }
}

export default Person;