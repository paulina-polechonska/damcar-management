import React, {useState, useEffect} from "react";
import Header from "./Header";
import { createRoot } from 'react-dom/client';
import {
    HashRouter,
    Route,
    Routes,
    BrowserRouter
} from 'react-router-dom';
import AddTask from "./AddTask";
import Login from "./Login";
import Desktop from "./Desktop";
import UpdateTask from "./UpdateTask";

const App = () => {
  // const [showLoginWindow, setShowLoginWindow] = useState(false);
  // const [username, setUsername] = useState();

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route exact path={'/Pulpit'} element={< Desktop />}/>
              <Route path={'/Zaloguj'} element={< Login />}/>
              <Route path={'/Dodaj'} element={< AddTask />}/>
              <Route path={'/:id'} element={< UpdateTask />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
