import React from 'react'
import './comp.css'
function Comp({styles,num}) {
  return (
    <div className='card'>
        <p className='num' style={styles}>{num}</p>
    </div>
  )
}

export default Comp