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
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://argfgjtkvymykjethcus.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZ2ZnanRrdnlteWtqZXRoY3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxNTU0MTEsImV4cCI6MTk5NzczMTQxMX0._RCmoAw4Nk0lDybiwoVssMFsvjGNW9Tc5lx-_yKgkJo");


const App = () => {
  // const [showLoginWindow, setShowLoginWindow] = useState(false);
  // const [username, setUsername] = useState();

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
