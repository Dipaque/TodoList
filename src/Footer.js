import React from 'react'


const Footer = ({length}) => {
  return (
    <main>
    
    <div >You have {(length<=1)?`${length} pending work`:`${length} pending works`}</div>
    </main>
  )
}

export default Footer
