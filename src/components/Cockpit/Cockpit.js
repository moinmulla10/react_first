import React, { useEffect, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth_context';

const Cockpit = (props) => {

  const authContext = useContext(AuthContext);
  useEffect(() =>{
    console.log('[Cockpit.js] useEffect');
  });
    const btnClass = [classes.Button];
    if(props.changeColor){
      btnClass.push(classes.Red);
    }

    return (
        <div>
        <h1>Hi, I am Moin</h1> 
        {props.persons}
        <button className={btnClass.join(' ')} onClick={props.changeNameHandler.bind(this,'Mulla')}>Change Name</button>
          <button className={btnClass.join(' ')} onClick={authContext.login}>Login</button>
        
        
      </div>
    );
};

export default Cockpit;