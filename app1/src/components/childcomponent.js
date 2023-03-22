import React from 'react'

function childcomponent(props) {
    function callchild(){
        alert('child called')
    }
  return (
    <div>
        <button onClick={()=>{props.greetHandler('harish')}}>click</button>
    </div>
  )
}

export default childcomponent