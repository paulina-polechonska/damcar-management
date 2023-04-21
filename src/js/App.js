import React, {useState, useEffect} from "react";
import Header from "./Header";
import { createRoot } from 'react-dom/client';
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet, BrowserRouter
} from 'react-router-dom';
import TaskForm from "./TaskForm";
import Login from "./Login";
import Desktop from "./Desktop";


const App = () => {
  const [showLoginWindow, setShowLoginWindow] = useState(false);
  const [username, setUsername] = useState();

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route exact path={'/Pulpit'} element={< Desktop />}/>
              <Route path={'/Zaloguj'} element={< Login />}/>
              <Route path={'/Dodaj'} element={< TaskForm />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
