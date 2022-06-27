import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const MissingPage = () => {
  return (
   <div>
       <div class="container">
  <div class="text-center">
    <div className='m-4' style={{fontSize: '8em', borderBottom: '1px dashed black'}}>
      <span >4</span>
      <span >0</span>
      <span >4</span>
    </div>
    <h3 className='m-1'>PAGE NOT FOUND</h3>
   <Link to="/"> <Button className='m-3'>Return To Home</Button></Link>
  </div>
</div>
   </div>
  )
}

export default MissingPage