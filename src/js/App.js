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
  const [userName, setUsername] = useState();

  return (
      <BrowserRouter>
          <Header username={userName}/>
          <Routes>
              <Route path={'/'} element={< Login />}/>
              <Route path={'/Pulpit'} element={< Desktop />}/>
              <Route path={'/Dodaj'} element={< AddTask />}/>
              <Route path={'/:id'} element={< UpdateTask />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
