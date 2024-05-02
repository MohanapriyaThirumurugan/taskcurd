import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './assets/components/Dashboard'
import Add from './assets/components/Add'
import Edit from './assets/components/Edit';
import { useState } from 'react';
import Topbar from './assets/components/topbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [user,setuser]=useState([
    {
      id:1,
      title:"Task 1",
      des:"about the project",
      rat:"3",
      Status :false
    },
    {
      id:2,
      title:"Task 2",
      des:"about the project",
      rat:"3",
      Status :false
    },
    {
      id:3,
      title:"Task 3",
      des:"about the project",
      rat:"3",
      Status :false
    }
  ])
  let[completed,setcompleted]=useState([
    {
    drop:"completed",
    undrop:"uncompleted"
    }
  ])

  return (
    <BrowserRouter>
    <Add user={user} setuser={setuser} />
    <Topbar user={user} setuser={setuser}completed={completed} setcompleted={setcompleted}/>
    <Routes>
     {/* <Route path='/dashh' element={<Dashboard user={user} setuser={setuser} completed={completed} setcompleted={setcompleted}/> }></Route> */}
     <Route path='/Edit/:id'element={<Edit user={user} setuser={setuser}completed={completed} setcompleted={setcompleted}/>}></Route>
     <Route path='/Topbar' element={<Topbar user={user} setuser={setuser}completed={completed} setcompleted={setcompleted}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App