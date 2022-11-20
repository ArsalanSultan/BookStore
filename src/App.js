import React from "react";
import Header from "./components/Header";
import { Route, Routes  } from "react-router-dom";
import About from "./components/About";
import Books from "./components/Book/Books";
import Addbook from "./components/Addbook";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";

function App() {
  return (
    <React.Fragment>
    <header>
        <Header/>
    </header>
    <main>

      <Routes>
        <Route path ="/" element={<Home/>} exact/>
        <Route path ="/add" element={<Addbook/>} exact/>
        <Route path ="/books" element={<Books/>} exact/>
        <Route path ="/about" element={<About/>} exact/>
        <Route path ="/signin" element={<SignIn/>} exact/>
        <Route path ="/signup" element={<Signup/>} exact/>
        
      </Routes>

    </main>
    </React.Fragment>
  )
  
}

export default App;
