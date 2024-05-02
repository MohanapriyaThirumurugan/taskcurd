import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Add({user,setuser}) {
  let navigate=useNavigate()
  let[title,settitle]=useState("")
  let[des,setdes]=useState("")
  let[completed,setcompleted]=useState("uncompleted")
  function handleadd(){
   let id=user.length?user[user.length-1].id+1:1
   let newarray=[...user]
   newarray.push({
    title,
    des,
    rat
  
   })
   console.log("calling");
   setuser(newarray)
  //  Navigate('/Topbar')
  }
  
  return (
  <>
    {/* <form> */}
    <div className='form'>
      <label> Title</label><br></br>
      <input className="title" placeholder='yourtitle' onChange={(ele)=>settitle(ele.target.value)}/>
      <label> description</label><br></br>
      <input className="description" placeholder='your description' onChange={(ele)=>setdes(ele.target.value)}/>
      <label> status</label><br></br>
      <input className="description" placeholder='your description' onChange={(ele)=>setdes(ele.target.value)}/>
      <button className="addbtn" type="sumit" onClick={()=>handleadd() }>Addtodo</button>
   </div>
    {/* </form> */}
    </>
    
  )
}
export default Add
// import React, { useState } from 'react';

// function Add() {
//   const [title, setTitle] = useState('');
//   const [des, setDes] = useState('');
//   const [status, setStatus] = useState('uncompleted'); // Default status

//   const [todos, setTodos] = useState([]);
//   const [idCounter, setIdCounter] = useState(1);

//   function handleAdd() {
//     if (title.trim() === '' || des.trim() === '') return;

//     const newTodo = {
//       id: idCounter,
//       title,
//       des,
//       status,
//     };

//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//     setIdCounter(idCounter + 1);

//     // Clear form fields after adding todo
//     setTitle('');
//     setDes('');
//     setStatus('uncompleted');
//   }

//   function handleDelete(id) {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   }

//   return (
//     <>
//       <form>
//         <label>Title</label>
//         <input
//           className="title"
//           placeholder="Your title"
//           value={title}
//           onChange={(ele) => setTitle(ele.target.value)}
//         />
//         <label>Description</label>
//         <input
//           className="description"
//           placeholder="Your description"
//           value={des}
//           onChange={(ele) => setDes(ele.target.value)}
//         />
//         <label htmlFor="status">Select Status:</label>
//         <select
//           id="status"
//           name="status"
//           value={status}
//           onChange={(ele) => setStatus(ele.target.value)}
//         >
//           <option value="completed">Completed</option>
//           <option value="uncompleted">Uncompleted</option>
//         </select>
//         <button type="button" onClick={handleAdd}>
//           Add todo
//         </button>
//       </form>

//       <div>
//         <h2>Todos</h2>
//         <ul>
//           {todos.map((todo) => (
//             <li key={todo.id}>
//               {todo.title} - {todo.des} - {todo.status}
//               <button onClick={() => handleDelete(todo.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

//export default Add;
