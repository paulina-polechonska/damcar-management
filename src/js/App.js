import React, {useState} from "react";
import Header from "./Header";
import {Route, Routes, BrowserRouter as Router, HashRouter} from 'react-router-dom';
import AddTask from "./AddTask";
import Login from "./Login";
import Desktop from "./Desktop";
import UpdateTask from "./UpdateTask";
import UserContext from "../UserContext";


const App = () => {
  const [name, setName] = useState('Login');

  return (
       // <HashRouter basename='/damcar-management'>
      <HashRouter>
          <UserContext.Provider value={{name, setName}}>
              <Header usernameH={name}/>
              <Routes>
                  <Route path='/' element={< Login />}/>
                  <Route path='/Pulpit' element={< Desktop />}/>
                  <Route path='/Dodaj' element={< AddTask />}/>
                  <Route path='/:id' element={< UpdateTask />}/>
              </Routes>
          </UserContext.Provider>
      </HashRouter>
  );
}

export default App;
