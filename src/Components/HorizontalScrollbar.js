import React from 'react'

import './HorizontalScrollbar.css';

function HorizontalScrollbar({data}) {
  return (
    <div>
      {data.map((item)=> <div id='ui'>
       {item}
        
        </div>)}
    </div>
  )
}

export default HorizontalScrollbar;
