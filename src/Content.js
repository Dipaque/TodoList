import React from 'react'
import {FaTrash} from 'react-icons/fa'

const Content = ({items,handleCheck,handleDelete}) => {


  return (
    <main>
      {(items.length)?(
      <ul>
        {items.map((item)=> (
          
          <li style={{listStyleType:"none"}} key={item.id}>
            <div className="row">
              <div className="col ">
            <input type="checkbox" onChange={()=>handleCheck(item.id)} checked={item.checked}/>
            </div>
            <div className="col pt-2">
            <label onDoubleClick={()=>handleCheck(item.id)}>{item.msg}</label>
            </div>
            <div className="col ">
            <button onClick={()=>handleDelete(item.id)} className='btnPlus'><FaTrash id='trash' /></button>
            </div>
            </div>
          </li>
        ))}
      </ul>
      ):(<p className='empty' style={{display:"flex",justifyContent:"center",fontSize:"20px" , alignItems:"center"}}>Your List is empty!</p>)}

    </main>
  )
}

export default Content
