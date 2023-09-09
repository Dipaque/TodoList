import React from 'react'
import {FaPlus} from 'react-icons/fa'
const AddItems = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      
    <input className='addItem mt-5 mb-4' type='text' id='addItems' placeholder='Add Items...' autoFocus required value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
    <button className='btn '><FaPlus /></button>
    </form>
  )
}

export default AddItems