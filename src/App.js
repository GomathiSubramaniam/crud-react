import { Route, Switch } from 'react-router-dom';
import './App.css';

import UserComponent from './Compontents/Usercompontent';
import { AddUser } from './Compontents/AddUser';
import { data } from './Data/data';
import { useState } from 'react';
import Nopage from './Compontents/NoPage';
import { UserDetails } from './Compontents/UserDetails';
import { EditUser } from './Compontents/EditUser';

function App() {
  const [user, setUser] = useState(data)
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
        <UserComponent
        user={user}
        setUser={setUser}
        />
        </Route>
        <Route path='/add/user'>
          <AddUser
          user={user}
          setUser={setUser}
          />
          </Route>
        <Route path='/edit/:id'>
        <EditUser
          user={user}
          setUser={setUser}
          />
        </Route>
        <Route path='/user/:id'>
         <UserDetails 
         user={user}
         setUser={setUser}/>
          </Route>
        <Route path="***">
          <Nopage/>
        </Route>
      </Switch>
       
    </div>
  );
}

export default App;
