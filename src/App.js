import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';

import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// Agar hm default ko import kr rhe hai to bracket lagane ki jarurat nhi hai

// this is not html this is jsx- javaScript Syntax Extension
// {javaScriptElement}
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("I'm onDelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // localStorage.getItem("todos");
    // console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    // console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  // const [todos, setTodos] = useState([
  //   {
  //     sno: 1,
  //     title: "Go to the market",
  //     desc: "You need to go to the market to get this job done"
  //   },
  //   {
  //     sno: 2,
  //     title: "Go to the mall",
  //     desc: "You need to go to the mall to get this job done"
  //   },
  //   {
  //     sno: 3,
  //     title: "Go to the ghat",
  //     desc: "You need to go to the ghat to get this job done"
  //   },
  // ]);


  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />


        <Routes>
          <Route exact path='/' element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }></Route>
          {/* 
          <Route exact path="/" render={()=>{
            return(
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
           */}
          <Route exact path="/about" element={<About />}>

          </Route>
        </Routes>

        <Footer />
      </Router>
      {/* <h3>My App</h3>
      <p>My app works</p> */}
    </>
    // return ke ander ke content ko hme wrap krna pdta hai ydi hm inhe div me wrap krna nhi chahte to 
    // empty box me wrap krna pdega


    // <div className="App">
    //   <header className="App-header">

    //     <div>{myVariable}</div>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );

}

export default App;
