import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Add from './Add'
import { useNavigate } from 'react-router-dom';


function Topbar({user,setuser,completed,setcompleted}) {
  // <Add/>
    // console.log(user,setuser);
    let navigate=useNavigate()

    function handledelete(id){
       let index;
       for(let i=0;i<user.length;i++){
          if(user[i]===id){
            index=i
            break
          }
       }
      let newarray= [...user] 
      newarray.splice(index,1)
      setuser(newarray)
    }

  return (
  <>
    {/* <Add/> */}

<h1 className='list'>LIST</h1>
<div className='topbar'>
  {
    user.map((ele)=>{
    return <div className="card  ">
    <Card className="bg-secondary  " key={ele.id}>
     <Card.Title>{ele.title}</Card.Title>
          <Card.Text>
          {ele.des}
          </Card.Text>
          <Card.Text>
          {ele.rat}
          </Card.Text>
      <div>
      <Button variant="primary "onClick={()=>navigate(`/Edit/${ele.id}`)}>edit</Button>{' '}
      <Button variant="danger" onClick={()=>{handledelete(ele.id)}}>delete</Button>{' '}
</div>
      </Card>
  </div>
      
    })

}
</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    {/* <Card className="bg-dark text-white">
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card> */}
    </>
  )
}

export default Topbar