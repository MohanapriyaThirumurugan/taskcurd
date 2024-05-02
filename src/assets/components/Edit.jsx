import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Edit({user=[],setuser}) {
  // console.log(user,setuser);
  let navigate=useNavigate()
  let params=useParams()
  let[title,settitle]=useState(" ")
  let[des,setdes]=useState(" ")

  //handle the edit function
  const {id} = useParams();
  console.log(id);
  function handleEdit(){
   let index;
    for(let i=0;i<=user.length;i++){
     if(id==user[i].id){
      index=i
      break
     }
    }
    let newarray=[...user]
    console.log(index);
    newarray.splice(index,1 ,{
      title,
      des
    })
    setuser(newarray)
    navigate('/Edit')
  }
  // get the value for state change
  function getthedata(){
   let  id=params.id
    let index
    for(let i=0;i<=user.length;i++){
      if(id==user[i]?.id){
        index=i
        break
      }
    }
    settitle(user[index].title)
    setdes(user[index].des)
  }

  useEffect(()=>{
    getthedata()
  },[])
  
  return (
  <>
    {/* <form> */}
      <label>Title</label>
      <input className="title" placeholder='yourtitle' value ={title} onChange={(ele)=>settitle(ele.target.value)}/>
      <label>description</label>
      <input className="description" placeholder='your description'value={des} onChange={(ele)=>setdes(ele.target.value)}/>
    <label for="status">Select Status:</label>
    <select id="status" name="status">
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
     </select>
      <button type="sumit" onClick={()=>handleEdit()}>Addtodo</button>
{/* </form> */}
</>
    
  )
}

export default Edit